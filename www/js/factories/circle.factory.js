angular.module('starter.factories').
  factory('Circle', function() {
    var Circle = function (){
      return [
        { number: 1, screenX: '50%', screenY: '50%', label: 'Begin' },
        { number: 2, screenX: '70%', screenY: '20%', label: '' },
        { number: 3, screenX: '90%', screenY: '50%', label: '' },
        { number: 4, screenX: '70%', screenY: '40%', label: '' },
        { number: 5, screenX: '80%', screenY: '80%', label: '' },
        { number: 6, screenX: '15%', screenY: '82%', label: '' },
        { number: 7, screenX: '10%', screenY: '40%', label: '' },
        { number: 8, screenX: '40%', screenY: '35%', label: 'End' }
      ];
    };

    return Circle;
  });