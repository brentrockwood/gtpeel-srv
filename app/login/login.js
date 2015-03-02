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
  function postLogin() {
    $location.path('/view1');
  }

  if(user.isLoggedIn()) {
    // User is already logged in.
    postLogin();
  }

  $scope.login = function() {
    var that = this;
    this.showLoginError = false;

    user.login(this.userName, this.userPassword)
    .then(function(data) {
      // Successfully logged in!
      postLogin();
    }, function(errorData) {
      // Error during login.
      console.log('ERROR! ' + errorData);
      that.showLoginError = true;
    });
  }

  $scope.register = function() {
    user.register(this.userName, this.userPassword)
    .then(function(data) {
      // Successfully registered!
      postLogin(); // Presume the new user is logged in automatically.
    }, function(errorData) {
      console.log('ERROR! ' + errorData);
    });
  }
});
