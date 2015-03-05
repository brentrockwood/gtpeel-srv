'use strict';

angular.module('myApp.account', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/account', {
    templateUrl: 'account/account.html',
    controller: 'accountCtrl'
  });
})

.controller('accountCtrl', function($scope, $http) {
  $scope.showAccountError = false;

  $scope.save = function() {
    console.log('saving');

    $http.post('/user/update', this.user)
    .success(function() {
      $scope.showAccountError = false;
    })
    .error(function(data, status) {
      $scope.showAccountError = true;
    });
  };
});
