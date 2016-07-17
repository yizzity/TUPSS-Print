
(function() {
  'use strict';

  angular.module('printCRM')

  .service('JobsService', ['$http',

    function ($http) {

      var api = "http://localhost:3000/";

      this.getJobs = function(){
        var url = api + "print_jobs.json";
        console.log('getting jobs in service');
        return $http.get(url);
      };



    }

  ]);

}());
