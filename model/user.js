"use strict";

module.exports = function(app) {
  var db = app.get('db');

  var schema = new db.Schema({
    email: { type: String, index: true, unique: true },
    password: { type: String }
  });

  return db.model('User', schema);
};
