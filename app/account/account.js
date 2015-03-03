'use strict';

angular.module('myApp.account', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/account', {
    templateUrl: 'account/account.html',
    controller: 'accountCtrl'
  });
})

.controller('accountCtrl', function() {

});
