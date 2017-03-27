'use strict';

var notte = angular.module('notte', [
    'ui.router',
    'noteControllers',
    'noteServices'
]);

notte.config(
    ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');
        $stateProvider.
            state('about', {
                url: '/about',
                templateUrl: '/static/partials/about.html'
            }).
            state('show-note', {
                url: '/show-note/:id',
                templateUrl: '/static/partials/note-show.html',
                controller: 'NoteController'
            }).
            state('create-note', {
                url: '/create-note',
                templateUrl: '/static/partials/note-create.html',
                controller: 'NoteController'
            }).
            state('edit-note', {
                url: '/edit-note/:id',
                templateUrl: '/static/partials/note-edit.html',
                controller: 'NoteController'
            }).
            state('list-notes', {
                url: '/list-notes',
                templateUrl: '/static/partials/note-list.html',
                controller: 'NoteListController'
            });
    }]
);
