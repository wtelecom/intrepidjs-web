/**
 * @file index.js
 * @namespace Documentation angular routes
 * @desc Documentation angular routes
 */


angular.module('IntrepidJS').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            
            $stateProvider.
                state('documentation', {
                    url: '/documentation',
                    views: {
                        "main_content":
                            {
                                templateUrl: "/documentation",
                                controller: 'DocController'
                            }
                    }
                });
        }
    ]
);