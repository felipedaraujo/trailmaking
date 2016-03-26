angular.module('starter.controllers').
  controller('ApplicantCtrl', function($rootScope, $scope, $location, $stateParams, Popup) {

    $scope.applicant = {};

    $scope.init = function(){
      if ($stateParams.param == 'new') {
        $scope.title = "Add new applicant"
      } else {
        let applicant = JSON.parse(window.localStorage.getItem($stateParams.param));
        $scope.applicant = applicant;

        $scope.title = "Edit applicant"
      }
    }

    $scope.goTo = function(path) {
      $location.path(path);
    }

    $scope.goBack = function() {
      if (updated()) {
        Popup.discard();
      } else {
        $scope.goTo('/home');
      }
    }

    $scope.confirm = function() {
      if ($scope.applicant.name) {
        createUpdate();
        Popup.confirm($scope.applicant.id);
      } else {
        $location.path('/home');
      }
    }

    createUpdate = function() {
      $scope.applicant.id = getIndex()
      window.localStorage[$scope.applicant.id] = JSON.stringify($scope.applicant);
    }

    getIndex = function() {
      return $scope.applicant.id || window.localStorage.length.toString();
    }

    updated = function(){
      let index = getIndex()
      let applicant = window.localStorage.getItem(index);

      return !$rootScope.emptyObject($scope.applicant) && applicant != JSON.stringify($scope.applicant);
    }
  });
