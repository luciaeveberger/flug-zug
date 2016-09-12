(function () {
    'use strict';

    angular
        .module('savrApp', 
            ['ngRoute', 
            'todoController',
            'createUserService',
            'gridAppController', 
            'angularModalService',
            ])
        .config(config);


    function config($routeProvider, $locationProvider) {
        console.log("To figure out")

    }

})();

