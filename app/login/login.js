'use strict';

angular.module('myApp.login', ['ngRoute', 'myApp.user'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', 'user', function($scope, user) {
  if(user.isLoggedIn()) {
    // User is already logged in.
    // TODO: Send the user to the main page.

    console.log('NOTE: The user is already logged in!');
  }

  $scope.login = function() {
    user.login(this.userName, this.userPassword)
    .then(function(data) {
      // Successfully logged in!
      console.log(data);
    }, function(errorData) {
      // Error during login.
      console.log('ERROR!');
      console.log(errorData);
    });
  }
}]);
