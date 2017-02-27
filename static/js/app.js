'use strict';

var notte = angular.module('notte', [
    'ngRoute'
]);

notte.config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/about'
            }).
            when('/notes', {
                templateUrl: '/static/partials/notes.html'
            }).
            when('/about', {
                templateUrl: '/static/partials/about.html'
            }).
            when('/create-note', {
                templateUrl: '/static/partials/note-create.html'
            }).
            when('/edit-note', {
                templateUrl: '/static/partials/note-edit.html'
            }).
            otherwise({
                redirectTo: '/about'
            });
    }]
);
