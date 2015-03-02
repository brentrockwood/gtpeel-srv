'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.login'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // Set the default route.
  $routeProvider.otherwise({redirectTo: '/login'});

  // Use friendly route URLs.
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);
