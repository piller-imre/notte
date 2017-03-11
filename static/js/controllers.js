'use strict';

var noteControllers = angular.module('noteControllers', []);

noteControllers.controller('NoteViewController',
    ['$scope', '$routeParams', 'Note',
    function NoteViewController($scope, $routeParams, Note)
    {
        var noteId = $routeParams.id;
        Note.get(
            {"id": noteId},
            function success(response)
            {
                console.log("success: " + JSON.stringify(response));
            },
            function error(errorResponse)
            {
                console.log("error: " + JSON.stringify(errorResponse));
            }
        );
    }
    ]
);
