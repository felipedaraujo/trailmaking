angular.module('starter.controllers').
  controller('ApplicantCtrl', function($scope, $location, Popup) {

    $scope.applicant = {};

    $scope.goTo = function(path) {
      $location.path(path);
    }

    $scope.goBack = function() {
      if ($scope.applicant.name || $scope.applicant.age) {
        Popup.discard();
      } else {
        $scope.goTo('/home');
      }
    }

    $scope.confirm = function() {
      if ($scope.applicant.name) {
        var index = window.localStorage.length.toString();
        var applicant = {
          name: $scope.applicant.name,
          age: $scope.applicant.age
        };

        window.localStorage[index] = JSON.stringify(applicant);

        Popup.confirm();
      } else {
        $scope.goTo('/home');
      }
    }
  });
