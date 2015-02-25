"use strict";

var bcrypt = require('bcrypt-nodejs');

module.exports = function(app) {
  var db = app.get('db');

  var schema = new db.Schema({
    email: { type: String, index: true, unique: true },
    password: { type: String }
  });

// Hash the password before saving the user.  The work factor can be adjusted
// up in the future if necessary.  For now, we are using the default.

  var SALT_WORK_FACTOR = 10;

  schema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) {
      return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) {
        return next(err);
      }

      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    });
  });

// Expose bcrypt's hash comparison.

  schema.methods.checkPassword = function(pw, cb) {
    bcrypt.compare(pw, this.password, cb);
  };

  return db.model('User', schema);
};
