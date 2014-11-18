/**
 * @file admin.js
 * @namespace Documentation admin angular routes
 * @desc Documentation admin angular routes
 */


angular.module('IntrepidJS').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider.
                state('admin.modules.documentation', {
                    url: '/documentation',
                    views: {
                        "actions_parent_content":
                            {
                                templateUrl: "/documentation/admin/parent",
                                controller: "@nameAdminIndexController"
                            }
                    }
                });
        }
    ]
);