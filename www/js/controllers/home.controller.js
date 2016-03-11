angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, $location) {

    $scope.goTo = function(path) {
      $location.path(path);
    }
  });