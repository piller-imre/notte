'use strict';

var noteServices = angular.module('noteServices', ['ngResource']);

noteServices.factory('Notes', ['$resource',
    function($resource)
    {
        return $resource("notes", {}, {
            add: {method: 'POST', cache: false, isArray: false},
            list: {method: 'GET', cache: false, isArray: true}
        });
    }
]);

noteServices.factory('Note', ['$resource',
    function($resource)
    {
        return $resource("notes/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            remove: {method: 'DELETE', cache: false, isArray: false}
        });
    }
]);
