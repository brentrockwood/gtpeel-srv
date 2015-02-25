"use strict";

// This is the database connection preamble.
// We are using [Mongoose](http://mongoosejs.com)

module.exports = function(app) {
  // The 'DbServer' environment variable is set on Heroku when using MongoHq.
  var dbServer = process.env.DbServer || 'localhost';
  var mongoose = require('mongoose');
  mongoose.connect(dbServer, 'gtPeel');
  return mongoose;
};
