(function() {
  'use strict';

  angular.module('printCRM')

  .controller('JobsController', ['$scope', 'JobsService',

    function ($scope, JobsService) {

      $scope.joblist = [];

      var getJobs = function(){
        JobsService.getJobs().then(function(data){
          $scope.jobList = data;
          console.log($scope.joblist);
        });
      };

      // $scope.joblist = [
      //   {
      //     customer_name: 'John Anderson',
      //     status: 'Incomplete',
      //     due_date: '4/13/2017',
      //     job_type: 'Flyers'
      //   },
      //   {
      //     customer_name: 'Matt Newman',
      //     status: 'Incomplete',
      //     due_date: '5/23/2017',
      //     job_type: 'Booklets'
      //   },
      //   {
      //     customer_name: 'Meade Slocomb',
      //     status: 'Incomplete',
      //     due_date: '9/13/2016',
      //     job_type: 'Color'
      //   }
      // ];

      console.log($scope.joblist);

      getJobs();

    }

  ]);
}());

