'use strict';

angular.module('myApp.designs', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/designs', {
    templateUrl: 'designs/designs.html',
    controller: 'designsCtrl'
  });
})

.controller('designsCtrl', function() {

});
