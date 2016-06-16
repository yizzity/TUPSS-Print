(function() {
  'use strict';

  angular.module('printCRM')

  .controller('DashController', ['$scope', 'UserService',

    function ($scope, UserService) {

      console.log(UserService);

    }

  ]);
}());
