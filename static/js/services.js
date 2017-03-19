'use strict';

var noteServices = angular.module('noteServices', ['ngResource']);

noteServices.factory('Note', ['$resource',
    function($resource)
    {
        return $resource("notes/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            create: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            remove: {method: 'DELETE', cache: false, isArray: false}
        });
    }
]);

noteServices.factory('Notes', ['$resource',
    function($resource)
    {
        return $resource("notes", {}, {
            list: {method: 'GET', cache: false, isArray: true}
        });
    }
]);
