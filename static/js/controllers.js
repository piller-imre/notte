'use strict';

// TODO: Use location headers on creation responses!

var noteControllers = angular.module('noteControllers', []);

noteControllers.controller('NoteController',
    ['$scope', '$routeParams', '$location', 'Note',
    function NoteController($scope, $routeParams, $location, Note)
    {
        $scope.emptyNote = {
            "description": "",
            "tags": ""
        };

        $scope.setModel = function(response)
        {
            $scope.note = response;
            console.log("success: " + JSON.stringify(response));
        };

        $scope.redirectToShow = function(response)
        {
            console.log("success: " + JSON.stringify(response));
            var noteId = response["id"];
            $location.path('/show-note/' + noteId);
        };

        $scope.redirectToList = function(response)
        {
            console.log("success: " + JSON.stringify(response));
            $location.path('/list-notes');
        };

        $scope.errorHandler = function(errorMessage)
        {
            console.log("error: " + JSON.stringify(errorMessage));
        };

        $scope.show = function(noteId)
        {
            Note.get({"id": noteId}, $scope.setModel, $scope.errorHandler);
        };

        $scope.create = function(note)
        {
            Note.create($scope.redirectToShow, $scope.errorHandler);
        };

        $scope.update = function(note)
        {
            Note.update($scope.redirectToShow, $scope.errorHandler);
        };

        $scope.remove = function(noteId)
        {
            note.remove({"id": noteId}, $scope.redirectToList, $scope.errorHandler);
        };

        var noteId = $routeParams.id;
        if (noteId) {
            $scope.show(noteId);
        }
        else {
            $scope.note = $scope.emptyNote;
        }
    }
    ]
);

noteControllers.controller('NoteListController',
    ['$scope', '$location', 'Notes',
    function NoteListController($scope, $location, Notes)
    {
        console.log("List the notes ...");
    }
    ]
);
