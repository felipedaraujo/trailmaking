angular.module('starter').
  run(function($rootScope) {

    $rootScope.emptyObject = function(obj) {
      return JSON.stringify(obj) == JSON.stringify(new Object) || anyEmptyAttr(obj);
    }

    anyEmptyAttr = function(obj) {
      for (var key in obj) {
        if(obj[key] == "" || obj[key] == null) return true;
      }
      return false
    }

  });