'use strict';

angular.module('myApp.user', [])

// Manages interacting with the user-related backend endpoints.
.service('user', function($http, $q) {
  this.current = null;

  this.getCurrent = function() {
    var deferred = $q.defer();
    var that = this;

    $http.get('/user/current')
    .success(function(data) {
      that.current = data;
      deferred.resolve(data);
    })
    .error(deferred.reject);

    return deferred.promise;
  };

  // Attempts to log in with the given username/password.
  this.login = function(username, password) {
    var deferred = $q.defer();
    var that = this;

    $http.post('/user/login', {
      username: username,
      password: password
    })
    .success(function(data) {
      that.current = data;
      deferred.resolve(data);
    })
    .error(deferred.reject);

    return deferred.promise;
  };

  this.logout = function() {
    var deferred = $q.defer();
    var that = this;

    $http.get('/user/logout')
    .success(function() {
      that.current = null;
      deferred.resolve();
    })
    .error(deferred.reject);

    return deferred.promise;
  }

  // Attempts to create a new user account.
  this.register = function(username, password) {
    var deferred = $q.defer();
    var that = this;

    $http.post('/user/register', {
      username: username,
      password: password
    })
    .success(function(data) {
      that.current = data;
      deferred.resolve(data);
    })
    .error(deferred.reject);

    return deferred.promise;
  }
})
