angular.module('starter.controllers').
  controller('TestCtrl', function($scope, $stateParams, Circle) {

    $scope.init = function() {
      $scope.circles = new Circle($stateParams.part);
    };

    $scope.drawLine = function(event) {
      var center = event.gesture.center;
      var pixel = '<div class="point" style="left:'+center.pageX+'px;'+
                  'top:'+center.pageY+'px;"></div>'
      content().innerHTML += pixel;
    };

    content = function(){
      return document.getElementsByClassName('scroll-content')[0];
    }
  });
