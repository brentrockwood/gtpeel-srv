'use strict';

angular.module('myApp.user', [])

// Manages interacting with the user-related backend endpoints.
.service('user', function($http, $q) {
  var current = null;

  this.getCurrent = function() {
    return current;
  }

  this.isLoggedIn = function() {
    return typeof(current) !== 'undefined' && current != null;
  }

  // Attempts to log in with the given username/password.
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

  // Attempts to create a new user account.
  this.register = function(username, password) {
    var deferred = $q.defer();

    $http.post('/user/register', {
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
})
