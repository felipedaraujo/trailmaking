angular.module('starter.services').
  service('Popup', function($ionicPopup, $location) {

    this.discard = function() {
      $ionicPopup.confirm({
        title: 'Discard your changes?',
        buttons: [
          { text: 'Cancel' },
          { text: 'Discard',
            onTap: function() {
              $location.path('/home');
            }
          }
        ]
      });
    };

    this.confirm = function(applicantId) {
      $ionicPopup.confirm({
        title: 'Take test now?',
        buttons: [
          { text: 'No',
            onTap: function() {
              $location.path('/home');
            }
          },
          { text: 'Yes',
            onTap: function() {
              $location.path('/test/part-a-sample/' + applicantId);
            }
          }
        ]
      });
    };
  });