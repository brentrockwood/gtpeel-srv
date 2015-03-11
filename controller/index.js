module.exports = function(app) {
  require('./user.js')(app);
  require('./geometry.js')(app);
};
