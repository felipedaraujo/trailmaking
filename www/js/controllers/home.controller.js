angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, $location, $ionicPopover, $ionicPopup) {

    var template = 'templates/popover.html';

    $ionicPopover.fromTemplateUrl(template, {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.init = function() {
      updateApplicants();
    }

    $scope.goTo = function(path) {
      $location.path(path);
    }

    $scope.options = function(event, applicant) {
      $scope.currentApplicant = applicant;
      $scope.popover.show(event);
    };

    $scope.takeTest = function() {
      $scope.popover.remove();

      $scope.goTo('/test/part-a-sample/' + $scope.currentApplicant.id)
    }

    $scope.edit = function() {
      $scope.popover.remove();

      $scope.goTo('/applicant/' + $scope.currentApplicant.id);
    }

    $scope.takenAt = function(dateTime) {
      var date = new Date(dateTime);
      return date.toDateString();
    }

    updateApplicants = function() {
      $scope.applicants = getAll();
    };

    getAll = function() {
      var all = [];
      for (var key in window.localStorage) {
        all.push(JSON.parse(window.localStorage[key]));
      }
      return all;
    }
  });
