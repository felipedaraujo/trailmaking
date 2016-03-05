angular.module('starter.services').
  service('Timer', function($interval) {

    var timer, time = 0;

    this.start = function() {
      timer = $interval(updateTime, 1000);
    }

    this.stop = function(){
      $interval.cancel(timer);
      return getTime();
    }

    updateTime = function(){
      time += 1;
    }

    getTime = function() {
      var minutes = Math.floor(time / 60);
      var seconds = time - minutes * 60;

      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;

      return minutes + ':' + seconds;
    }


  });