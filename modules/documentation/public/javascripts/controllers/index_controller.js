/**
 * @file index_controller.js
 * @namespace Index Controller
 * @desc This module manage AngularJS Documentation index operations
 */


/**
 * @desc  Documentation Index controller
 * @param object $scope - The controller scope var
 * @param object $state - The controller state route var
 */
angular.module('IntrepidJS').controller('DocController',
    [
        '$scope',
        '$state',
        '$location',
        '$anchorScroll',
        function ($scope, $state, $location, $anchorScroll){
            $anchorScroll.yOffset = 75;
            $.getJSON( "documentation/public/resources/apidoc.json", function( data ) {
              $scope.api = data;
              });
            $scope.goTo = function(id) {
                $location.hash(id);
            };
            $anchorScroll();
        }
    ]
);