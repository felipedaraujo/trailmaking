angular.module('starter.controllers').
  controller('AppCtrl', function($scope) {

    $scope.state = { param: "" };
    $scope.canvas = { reset: true };

    $scope.cleanTest = function() {
      $scope.canvas.context.clearRect(0, 0,
        $scope.canvas.container[0].width,
        $scope.canvas.container[0].height);

      $scope.canvas.reset = true;
    };
  });
