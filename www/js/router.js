angular.module('starter').
  config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        cache: false,
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })

      .state('applicant', {
        cache: false,
        url: '/applicant/:param',
        templateUrl: 'templates/applicant.html',
        controller: 'ApplicantCtrl'
      })

      .state('menu', {
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('menu.test', {
        cache: false,
        url: '/test/:part',
        views: {
          'menuContent' :{
            templateUrl: "templates/test.html",
            controller : "TestCtrl"
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  });