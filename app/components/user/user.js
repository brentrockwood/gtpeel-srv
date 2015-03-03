'use strict';

angular.module('myApp.user', [])

// Manages interacting with the user-related backend endpoints.
.service('user', function($http, $q) {
  var current = null;

  this.getCurrent = function() {
    $http.get('/user/current')
    .success(function() {
      current = data;
      return data;
    })
    .error(function() {
      current = null;
      return null;
    });
  };

  this.isLoggedIn = function() {
    return typeof(current) !== 'undefined' && current != null;
  };

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
  };

  this.logout = function() {
    var deferred = $q.defer();

    $http.get('/user/logout')
    .success(function() {
      current = null;
      deferred.resolve();
    })
    .error(deferred.reject);

    return deferred.promise;
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
