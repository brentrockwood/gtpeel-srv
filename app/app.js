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

.controller('AppCtrl', function($scope, user, $location) {
  var getUser = user.getCurrent();

  getUser.then(function(data) {
    $scope.user = data;
  }, function() {
    $location.path('/login');
  });

  $scope.logout = function() {
    $location.path('/login');
    user.logout();
    $scope.user = null;
  };
});
