angular.module('starter.controllers').
  controller('ApplicantCtrl', function($scope, $location) {

    $scope.applicant = {};

    $scope.goTo = function(path) {
      $location.path(path);
    }

    $scope.goBack = function() {
      $scope.goTo('/home');
    }

    $scope.confirm = function() {
      if ($scope.applicant.name) {

        var index = window.localStorage.length.toString();
        var applicant = {
          name: $scope.applicant.name,
          age: $scope.applicant.age
        };

        window.localStorage[index] = JSON.stringify(applicant);

        $scope.goTo('/home');

      } else {
        $scope.goTo('/home');
      }
    }
  });
