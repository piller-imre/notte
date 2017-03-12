'use strict';

// TODO: Use location headers on creation responses!

var noteControllers = angular.module('noteControllers', []);

noteControllers.controller('NoteShowController',
    ['$scope', '$routeParams', 'Note',
    function NoteShowController($scope, $routeParams, Note)
    {
        var noteId = $routeParams.id;
        Note.get(
            {"id": noteId},
            function success(response)
            {
                $scope.description = response.description;
                $scope.tags = response.tags;
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

noteControllers.controller('NoteCreateController',
    ['$scope', '$location', 'Notes',
    function NoteCreateController($scope, $location, Notes)
    {
        console.log("Init create controller ...");
        $scope.createNote = function()
        {
            console.log("Create new note ...");
            Notes.add(
                function success(response)
                {
                    console.log("success: " + JSON.stringify(response));
                    var noteId = response["id"];
                    $location.path('/show-note/' + noteId);
                },
                function error(errorResponse)
                {
                    console.log("error: " + JSON.stringify(errorResponse));
                }
            );
        }
    }
    ]
);
