'use strict';

var notte = angular.module('notte', [
    'ngRoute',
    'noteControllers',
    'noteServices'
]);

notte.config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/about'
            }).
            when('/about', {
                templateUrl: '/static/partials/about.html'
            }).
            when('/show-note/:id', {
                templateUrl: '/static/partials/note-show.html',
                controller: 'NoteController'
            }).
            when('/create-note', {
                templateUrl: '/static/partials/note-create.html',
                controller: 'NoteController'
            }).
            when('/edit-note/:id', {
                templateUrl: '/static/partials/note-edit.html',
                controller: 'NoteController'
            }).
            when('/list-notes', {
                templateUrl: '/static/partials/note-list.html',
                controller: 'NoteListController'
            }).
            otherwise({
                redirectTo: '/about'
            });
    }]
);
