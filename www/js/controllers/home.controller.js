angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, Circle) {
    $scope.init = function() {
      $scope.circles = new Circle();
    };
  });