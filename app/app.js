"use strict";
// module and array of dependencies
var app = angular.module("TodoApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.
        when ('/items/list', {
            templateUrl:'partials/items-list.html',
            controller :'TodoCtrl'
        }).
        when('items/new', {
            templateUrl:'partials/items-form.html',
            controller: 'TodoCtrl'
        }).
        otherwise ('items/list');
});
