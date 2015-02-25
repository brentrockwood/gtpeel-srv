"use strict";

var User;

function register(req, res) {
  console.log(req.body);
  console.log('registering user.');

  var newUser = new User({
    email: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err, savedUser, numAffected) {
    console.log('save returned');
    if(err) {
      // TODO: You would want to be more specific about the error returned here.
      // For example, in the case of a username collision, that's not a
      // server error.
      console.log('error was ' + err);
      return res.send(500, err);
    }

    console.log('saved user ' + savedUser + ' ' + numAffected);
    res.send(200, savedUser);
  });
  console.log('register returned.');
}

function login(req, res) {
  console.log('signing in user.');
  res.send('signed in user.');
}

module.exports = function(app) {
  User = require('../model/user.js')(app);
  
  app.post('/user/register', register);
  app.post('/user/login', login);
};
