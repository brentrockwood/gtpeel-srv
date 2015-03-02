'use strict';

angular.module('myApp.user', [])

.service('user', function($http, $q) {
  var current = null;

  this.getCurrent = function() {
    return current;
  }

  this.isLoggedIn = function() {
    return typeof(current) !== 'undefined' && current != null;
  }

  this.login = function(username, password) {
    var deferred = $q.defer();

    $http.post('/user/login', {
      username: username,
      password: password
    })
    .success(function(data) {
      current = data;
      deferred.resolve(data);
    })
    .error(deferred.reject);

    return deferred.promise;
  }

  this.logout = function() {
    // TODO: Call the backend logout endpoint.
    console.log('WARNING! Logging out is not as secure as it should be!');

    current = null;
  }
})
