angular.module('starter.factories').
  factory('Circle', function() {

    var Circle = function(part) {
      if (part == 'partA-sample') {
        return partASample();
      } else {
        return partA();
      }
    };

    partASample = function() {
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

    partA = function() {
      return [
        { number: 1, screenX: '60%', screenY: '60%', label: 'begin' },
        { number: 2, screenX: '40%', screenY: '65%', label: '' },
        { number: 3, screenX: '70%', screenY: '80%', label: '' },
        { number: 4, screenX: '70%', screenY: '40%', label: '' },
        { number: 5, screenX: '35%', screenY: '40%', label: '' },
        { number: 6, screenX: '52%', screenY: '52%', label: '' },
        { number: 7, screenX: '30%', screenY: '60%', label: '' },
        { number: 8, screenX: '20%', screenY: '75%', label: '' },
        { number: 9, screenX: '25%', screenY: '85%', label: '' },
        { number: 10, screenX: '35%', screenY: '75%', label: '' },
        { number: 11, screenX: '55%', screenY: '90%', label: '' },
        { number: 12, screenX: '10%', screenY: '95%', label: '' },
        { number: 13, screenX: '20%', screenY: '50%', label: '' },
        { number: 14, screenX: '10%', screenY: '65%', label: '' },
        { number: 15, screenX: '10%', screenY: '15%', label: '' },
        { number: 16, screenX: '20%', screenY: '30%', label: '' },
        { number: 17, screenX: '45%', screenY: '15%', label: '' },
        { number: 18, screenX: '45%', screenY: '30%', label: '' },
        { number: 19, screenX: '75%', screenY: '20%', label: '' },
        { number: 20, screenX: '60%', screenY: '20%', label: '' },
        { number: 21, screenX: '85%', screenY: '15%', label: '' },
        { number: 22, screenX: '90%', screenY: '45%', label: '' },
        { number: 23, screenX: '90%', screenY: '95%', label: '' },
        { number: 24, screenX: '80%', screenY: '65%', label: '' },
        { number: 25, screenX: '72%', screenY: '90%', label: 'end' }
      ];
    };

    return Circle
  });