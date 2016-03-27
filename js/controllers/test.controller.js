angular.module('starter.controllers').
  controller('TestCtrl', function($interval, $ionicGesture, $scope, $stateParams, Circle, Timer) {

    var Ax, Ay, Bx, By;
    var skipLoop = false;
    var timer, time = 0;
    var lastCircleCenter;
    var canvasInitiate = false;

    $scope.init = function() {
      $scope.state.param = $stateParams.part;
      $scope.state.applicantId = $stateParams.applicantId;
      $scope.applicant = JSON.parse(
        window.localStorage.getItem($stateParams.applicantId)
      );
      $scope.circles = new Circle($stateParams.part);
    };

    $scope.drawLine = function(event) {
      if (skipLoop) { skipLoop = false; return; }
      skipLoop = true;

      if (!canvasInitiate) canvasInit();

      var center = event.gesture.center;
      var isLast = isLastCircle(center);

      if ($stateParams.part == 'part-a' && isLast) {
        var duration = Timer.stop();
        alert(duration);
        updateApplicant(duration);
      }

      if ($scope.canvas.reset) resetLine();

      Bx = center.pageX,
      By = center.pageY,
      Ax = Ax || Bx;
      Ay = Ay || By;

      $scope.canvas.context.lineCap = "round";
      $scope.canvas.context.beginPath();
      $scope.canvas.context.moveTo(Ax, Ay);
      $scope.canvas.context.lineTo(Bx, By);
      $scope.canvas.context.lineWidth = 8;
      $scope.canvas.context.strokeStyle = '#757575';
      $scope.canvas.context.stroke();

      Ax = Bx;
      Ay = By;
    }

    $scope.resetLine = function() {
      Ax = null;
      Ay = null;
    }

    canvasInit = function() {
      $scope.canvas.container = angular.element(document.querySelector('#canvas'));
      $scope.canvas.context = $scope.canvas.container[0].getContext("2d");

      var content = getContentSize();
      var lastCircle = $scope.circles[$scope.circles.length - 1];

      setCanvasSize(content);
      lastCircleCenter = getCircleCenter(content, lastCircle);

      if ($stateParams.part == 'part-a') {

        Timer.start();
        console.log("Timer started");
      }
      canvasInitiate = true;
    }

    resetLine = function(){
      Ax = Ay = null;
      $scope.canvas.reset = false;
    };

    isLastCircle = function(touch) {
      var center = lastCircleCenter;
      return (
        (touch.pageX >= center.x - 25 && touch.pageX <= center.x + 25) &&
        (touch.pageY >= center.y - 25 && touch.pageY <= center.y + 25)
      );
    }

    beginPath = function() {
      Ax = Ay = null;
      $scope.canvas.context.beginPath();
      $scope.canvas.begin = false;
    }

    getContentSize = function() {
      var div = angular.element(document.querySelector('.test'));
      return {
        width: div[0].offsetWidth,
        height: div[0].offsetHeight
      };
    }

    setCanvasSize = function(content) {
      $scope.canvas.container[0].width = content.width;
      $scope.canvas.container[0].height = content.height;
    }

    getCircleCenter = function(content, circle) {
      var screenX = circle.screenX.replace('%','');
      var screenY = circle.screenY.replace('%','');

      return {
        x: content.width * screenX / 100,
        y: content.height * screenY / 100
      }
    }

    updateApplicant = function(duration) {
      var index = $scope.applicant.id;
      $scope.applicant.takenAt = new Date();
      $scope.applicant.time = duration;
      window.localStorage[index] = JSON.stringify($scope.applicant);
    }

  });
