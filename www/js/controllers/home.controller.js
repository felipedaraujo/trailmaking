angular.module('starter.controllers').
  controller('HomeCtrl', function($scope, $location) {

    $scope.init = function() {
      $scope.applicants = getAll();
    }

    $scope.goTo = function(path) {
      $location.path(path);
    }

    getAll = function() {
      var all = [];
      for (var i = window.localStorage.length - 1; i >= 0; i--) {
        all.push(JSON.parse(window.localStorage[i]));
      }
      return all;
    }
  });