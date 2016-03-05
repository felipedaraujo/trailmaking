angular.module('starter.controllers').
  controller('TestCtrl', function($interval, $ionicGesture, $scope, $stateParams, Circle, Timer) {

    var endCircleCenter;

    var part;
    var timer;
    var time = 0;

    var Ax, Ay, Bx, By;

    $scope.canvas.container = angular.element(document.querySelector('#canvas'));
    $scope.canvas.context = $scope.canvas.container[0].getContext("2d");

    $scope.init = function() {
      part = $stateParams.part;
      $scope.circles = new Circle(part);

      if (part == 'partA') Timer.start();

      setEndCircleCenter();
      setCanvasSize();
    };

    $ionicGesture.on('drag', function(event) {
      if ($scope.canvas.begin) {
        Ax = Ay = null;
        $scope.canvas.context.beginPath();
        $scope.canvas.begin = false;
      }

      var center = event.gesture.center;
      var isEnd = isEndCircle(center);

      if (part == 'partA' && isEnd) alert(Timer.stop());

      Bx = center.pageX,
      By = center.pageY,
      Ax = Ax || Bx;
      Ay = Ay || By;

      $scope.canvas.context.moveTo(Ax, Ay);
      $scope.canvas.context.lineTo(Bx, By);
      $scope.canvas.context.stroke();

      Ax = Bx;
      Ay = By;

    }, $scope.canvas.container);

    content = function(){
      return document.getElementsByClassName('scroll-content')[0];
    }

    circleCenter = function(circle) {
      var screenX = circle.screenX.replace('%','');
      var screenY = circle.screenY.replace('%','');

      return {
        xAxis: content().offsetWidth * screenX / 100,
        yAxis: content().offsetHeight * screenY / 100
      }
    }

    isEndCircle = function(position) {
      var A = endCircleCenter, B = position;
      return (B.pageX >= A.xAxis - 25 && B.pageX <= A.xAxis + 25) && (B.pageY >= A.yAxis - 25 && B.pageY <= A.yAxis + 25);
    }

    setEndCircleCenter = function() {
      endCircleCenter  = circleCenter($scope.circles[$scope.circles.length - 1]);
    }

    setCanvasSize = function() {
      $scope.canvas.container[0].width = content().offsetWidth;
      $scope.canvas.container[0].height = content().offsetHeight;
    }

  });
