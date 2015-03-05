'use strict';

angular.module('myApp.login', ['ngRoute', 'myApp.user'])

.config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
  .when('/register', {
    templateUrl: 'login/register.html',
    controller: 'LoginCtrl'
  });

  // TODO: A $http interceptor to handle 401 status codes would go here.
})

.controller('LoginCtrl', function($scope, user, $location) {
  $scope.showLoginError = false;

  function postLogin(user) {
    $location.path('/designs');
    $scope.$parent.user = user;
  }

  $scope.login = function() {
    var that = this;
    this.showLoginError = false;

    user.login(this.userName, this.userPassword)
    .then(function(data) {
      // Successfully logged in!
      postLogin(data);
    }, function(errorData) {
      // Error during login.
      console.log('ERROR! ' + errorData);
      that.showLoginError = true;
    });
  }

  $scope.register = function() {
    var that = this;
    this.showLoginError = false;

    user.register(this.userName, this.userPassword)
    .then(function(data) {
      // Successfully registered!
      postLogin(data); // Presume the new user is logged in automatically.
    }, function(errorData) {
      console.log('ERROR! ' + errorData);
      that.showLoginError = true;
    });
  }
});
