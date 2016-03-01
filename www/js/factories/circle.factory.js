angular.module('starter.factories').
  factory('Circle', function() {
    var Circle = function (){
      return [
        { number: 1, screenX: '10px', screenY: '10px' },
        { number: 2, screenX: '50px', screenY: '50px' },
        { number: 3, screenX: '90px', screenY: '90px' },
        { number: 4, screenX: '130px', screenY: '130px' },
        { number: 5, screenX: '170px', screenY: '170px' }
      ];
    };

    return Circle;
  });