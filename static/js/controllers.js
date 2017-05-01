'use strict';

// TODO: Use location headers on creation responses!

var noteControllers = angular.module('noteControllers', []);

noteControllers.controller('NoteController',
    ['$scope', '$stateParams', '$location', 'Note',
    function NoteController($scope, $stateParams, $location, Note)
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
            Note.create(note, $scope.redirectToShow, $scope.errorHandler);
        };

        $scope.update = function(note)
        {
            Note.update({"id": noteId}, note, $scope.redirectToShow, $scope.errorHandler);
        };

        $scope.remove = function(note)
        {
            var confirmed = confirm("Would you like to remove '" + note.description + "'?");
            if (confirmed) {
                Note.remove({"id": note.id}, $scope.redirectToList, $scope.errorHandler);
            }
        };

        var noteId = $stateParams.id;
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
        $scope.showList = function(response)
        {
            $scope.notes = response;
        };

        $scope.errorHandler = function(errorMessage)
        {
            console.log("list error: " + JSON.stringify(errorMessage));
        };

        Notes.list($scope.showList, $scope.errorHandler);

        console.log("List the notes ...");
    }
    ]
);

var tagControllers = angular.module('tagControllers', []);

tagControllers.controller('TagListController',
    ['$scope', '$location', 'Tags',
    function TagListController($scope, $location, Tags)
    {
        $scope.showList = function(response)
        {
            $scope.tags = response;
        };

        $scope.errorHandler = function(errorMessage)
        {
            console.log("list error: " + JSON.stringify(errorMessage));
        };

        Tags.list($scope.showList, $scope.errorHandler);

        console.log("List the tags ...");
    }
    ]
);
