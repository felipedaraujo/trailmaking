angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, $location, $ionicPopover) {

    var template = 'templates/popover.html';

    $ionicPopover.fromTemplateUrl(template, {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.init = function() {
      $scope.applicants = getAll();
    }

    $scope.goTo = function(path) {
      $location.path(path);
    }

    $scope.options = function(applicant) {
      $scope.popover.show(applicant);
    };

    $scope.takeTest = function() {}

    $scope.edit = function() {}

    getAll = function() {
      var all = [];
      for (var i = window.localStorage.length - 1; i >= 0; i--) {
        all.push(JSON.parse(window.localStorage[i]));
      }
      return all;
    }
  });