'use strict';

var noteServices = angular.module('noteServices', ['ngResource']);

noteServices.factory('Note', ['$resource',
    function($resource)
    {
        return $resource("notes/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false}
        });
    }
]);
