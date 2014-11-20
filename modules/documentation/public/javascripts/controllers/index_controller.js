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
        'i18n',
        function ($scope, $state, $location, $anchorScroll, i18n){
            $anchorScroll.yOffset = 75;
            var lang = i18n.userLanguage;
            if (lang != 'es' && lang != 'en') {
                lang = 'es';
            }
            $.getJSON( "documentation/public/resources/doc_" + lang + ".json", function( data ) {
              $scope.api = data;
              });
            $scope.goTo = function(id) {
                $location.hash(id);
            };
            $anchorScroll();
        }
    ]
);