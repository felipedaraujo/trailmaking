angular.module('starter.services').
  service('Popup', function($ionicPopup, $location) {

    this.discard = function() {
      $ionicPopup.confirm({
        title: 'Discard your changes?',
        buttons: [
          { text: 'Cancel' },
          { text: 'Discard',
            onTap: function(event) {
              $location.path('/home');
            }
          }
        ]
      });
    };

    this.confirm = function() {
      $ionicPopup.confirm({
        title: 'Take test now?',
        buttons: [
          { text: 'No',
            onTap: function(event) {
              $location.path('/home');
            }
          },
          { text: 'Yes',
            onTap: function(event) {
              $location.path('/menu/test/partA-sample');
            }
          }
        ]
      });
    };
  });