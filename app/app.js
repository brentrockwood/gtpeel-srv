'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.designs',
  'myApp.account',
  'myApp.login',
  'myApp.user'
]).
config(function($routeProvider, $locationProvider) {
  // Set the default route.
  $routeProvider.otherwise({redirectTo: '/login'});

  // Use friendly route URLs.
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.run(function(user, $location) {
  if(!user.getCurrent()) {
    $location.path('/');
  }
})

.controller('AppCtrl', function($scope, user, $location) {
  $scope.isLoggedIn = user.isLoggedIn;
  $scope.getCurrent = user.getCurrent;

  $scope.logout = function() {
    user.logout();
    $location.path('/');
    $location.replace();
  };
});
