"use strict";

// We are using [Express](http://expressjs.com) for our base web framework.

var express = require('express');
var app = express();

// We store the database in the app so that we can inject it into the
// controllers.  This way, we can mock it out in testing.

var db = require('./db')(app);
app.set('db', db);

// If you want to log all requests, this needs to be placed before all other
// middlewares.  In a real app, you would modify the log format depending on
// environment.  For example, if we were in production, we would probably log
// in the Apache 'common' log format.  The dev format we are using here is
// nicely colored for viewing on stdout.
// We are using [Morgan](https://github.com/expressjs/morgan)

var logger = require('morgan');
app.use(logger('dev'));

// This middleware will override all other routes if a matching file exists
// in the public directory.  This is the only middleware that is still bundled
// with Express 4.x.

app.use(express.static('./public'));

// This placeholder middleware will serve up all files in the `app` directory.
// TODO: Remove this if/when code in `app` is processed/dumped into `public`.

app.use(express.static('./app'));

// This middleware parses our form bodies.  We are using
// [body-parser](https://github.com/expressjs/body-parser).  Note, it does
// not handle multi-part forms for file upload.

var bpOpts = { extended: false };
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded(bpOpts));

// This middleware parses JSON data.

app.use(bodyParser.json());

// This middleware allows us to store user sessions.  We are using
// [express-session](https://github.com/expressjs/session).  For the moment,
// we are just storing sessions in memory.  Eventually, we would likely store
// them in a server-shareable session store, such as MongoDb, or Redis.

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var sessionStore = new MongoStore({ mongooseConnection: db.connection });

if (! process.env.COOKIE_SECRET) {
  console.log('The environment variable "COOKIE_SECRET" is REQUIRED to be set on startup.');
  process.exit();
}

var sessionOpts = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  store: sessionStore };

app.use(session(sessionOpts));

// The controllers contain all the routes.  When we require a folder like this,
// require looks for an index.js in that folder and loads that.  Also, note we
// are passing in the app, which makes it easy to test using dependency
// injection.

require('./controller')(app);

// Support AngularJS HTML5-mode URLs.
// Requests to nonexistent routes (presumably client-side routes) are redirected
// to the client-side application.
var url = require('url');
app.get('/*', function(req, res) {
  // Only send the client redirect for requests that accept html content types.
  res.format({
    html: function() {
      return res.redirect(url.format({
        host: req.get('Host'),
        hash: '!' + req.url // Include the hash prefix.
      }));
    },
    default: function() {
      res.sendStatus(404);
    }
  });
});

// Listen on port 5000 by default, if the port environment variable is not set.
// It is set by default, for example, on Heroku.

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server is listening on port ' + port + '.');
