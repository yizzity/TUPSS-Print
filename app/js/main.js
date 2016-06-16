(function() {
  'use strict';

  angular.module('printCRM', ['ui.router'])

  .config([ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('dashboard', {
          url: '/',
          templateUrl: 'js/templates/dashboard.html',
          controller: 'DashController'
        })
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'js/templates/jobs.html',
          controller: 'JobsController'
        });
    }
  ]);



}());
