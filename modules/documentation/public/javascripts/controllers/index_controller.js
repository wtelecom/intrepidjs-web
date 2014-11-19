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
        function ($scope, $state){
            this.api = doc;
            $scope.api = doc;
        }
    ]
);

var doc = [
    {
        id: "introduction",
        title: "Introducción",
        text: "",
        content: [
            {
                id: "general",
                title: "Visión general",
                text: "<p>IntrepidJS es un framework de desarrollo web nacido para dar respuestas a las necesidades más comunes encontradas en el desarrollo de aplicaciones web. Nos permite crear aplicaciones web de manera rápida y sencilla. Gracias a esta documentación comprenderás cómo funciona y cómo puedes usar las diferentes tecnologías que lo componen para hacer de tu proyecto una realidad. La documentación está en continuo desarrollo, por lo tanto siéntete libre para hacernos saber cómo mejorarla. IntrepidJS se ha liberado bajo la licencia <a href='http://opensource.org/licenses/MIT'>MIT</a>.<p>",
                content: []
            },
            {
                id: "requirements",
                title: "Requisitos",
                text: "<p>Para empezar a usar IntrepidJS, necesitas instalar algunas herramientas en tu sistema.</p><ul><li><h3>Node.js</h3><p>Es un entorno de programación en la capa del servidor basado en el lenguaje de programación Javascript, es asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor Javascript V8 de Google. Para instalarlo en un sistema basado en Debian debes ejecutar los siguientes comandos:</p></li></ul>",
                content: []
            },
            {
                id: "other",
                title: "Other",
                text: "<p>IntrepidJS es un framework de desarrollo web nacido para dar respuestas a las necesidades más comunes encontradas en el desarrollo de aplicaciones web. Nos permite crear aplicaciones web de manera rápida y sencilla. Gracias a esta documentación comprenderás cómo funciona y cómo puedes usar las diferentes tecnologías que lo componen para hacer de tu proyecto una realidad. La documentación está en continuo desarrollo, por lo tanto siéntete libre para hacernos saber cómo mejorarla. IntrepidJS se ha liberado bajo la licencia <a href='http://opensource.org/licenses/MIT'>MIT</a>.<p>",
                content: []
            },
            {
                id: "other1",
                title: "Other1",
                text: "<p>Para empezar a usar IntrepidJS, necesitas instalar algunas herramientas en tu sistema.</p><ul><li><h3>Node.js</h3><p>Es un entorno de programación en la capa del servidor basado en el lenguaje de programación Javascript, es asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor Javascript V8 de Google. Para instalarlo en un sistema basado en Debian debes ejecutar los siguientes comandos:</p></li></ul>",
                content: []
            }
        ]
    }
];