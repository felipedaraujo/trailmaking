angular.module('starter.controllers').
  controller('AppCtrl', function($scope, $state) {
    var points = document.getElementsByClassName('point');

    $scope.cleanTest = function() {
      while(points.length > 0){
        points[0].parentNode.removeChild(points[0]);
      }
    }
  });
