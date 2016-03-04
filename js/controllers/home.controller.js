angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, $document, $interval, $compile, Circle) {

    var content = document.getElementsByClassName('scroll-content')[0];

    $scope.init = function() {
      $scope.circles = Circle.testA();
    };

    $scope.drawLine = function(event) {
      var center = event.gesture.center;
      var pixel = '<div style="position:absolute;left:'+center.pageX+'px;'+
                  'top:'+center.pageY+'px;width:10px;height:10px;'+
                  'border-radius:50%;background-color:#dadada"></div>'
      content.innerHTML += pixel;
    };
  });
