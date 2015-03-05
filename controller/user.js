"use strict";

var User
  , MONGO_ERROR_DUPLICATE_KEY = 11000
  , httpStatus = require('http-status-codes');

function register(req, res) {
  var newUser = new User({
    email: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err, savedUser, numAffected) {
    if(err) {
      if (MONGO_ERROR_DUPLICATE_KEY == err.code) {
        var conflictMsg = 'A user with that email address already exists.';
        return res.status(httpStatus.CONFLICT).send(conflictMsg);
      }

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }

    // Automatically log in the newly saved user.
    req.login(savedUser, function(err) {
      if(err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
      }

      res.send(savedUser);
    });
  });
}

function update(req, res) {
  console.log('bod is ' + JSON.stringify(req.body));
  
  User.findOneAndUpdate({_id: req.body._id }, req.body, function(err, data) {
    if(err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }

    console.log('data is ' + data);
    res.send('OK');
  })

  /*
  var user = new User(req.body);

  user.save(function(err, savedUser) {
    if(err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }

    res.send(savedUser);
  });
  */
}

// We are using [Passport](http://passportjs.org/guide/username-password/) for
// authentication.
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      user.checkPassword(password, function(err, isValid) {
        if (err) {
          console.log('Error checking password.\n' + err);
          return done(err);
        }

        if (!isValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        done(null, user);
      });
    });
  })
);

module.exports = function(app) {
  User = require('../model/user.js')(app);
  app.use(passport.initialize());
  
  app.post('/user/register', register);

  app.post('/user/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user.toObject());
  });

  app.get('/user/current', function(req,res) {
    if(req.session.passport.user) {
      return res.send(req.session.passport.user);
    }

    res.status(httpStatus.UNAUTHORIZED).send('UNAUTHORIZED');
  });

  app.get('logout', function(req, res) {
    req.logout();
    req.session.destroy(function() {
      res.redirect('/');
    });
  });

  app.post('/user/update', update);
};
