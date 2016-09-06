"use strict";
// module and array of dependencies
var app = angular.module("TodoApp", ["ngRoute"])
.constant('FirebaseURL',"https://ng-2-firebase.firebaseio.com/");
app.config(function($routeProvider){
    $routeProvider.
        when('/items/list', {
            templateUrl:'partials/items-list.html',
            controller:'ItemListCtrl'
        }).
        when('/items/new', {
            templateUrl:'partials/items-form.html',
            controller: 'ItemNewCtrl'
        }).
        when('#/items/{{item.id}}',{
            templateUrl:'partials/item-details.html',
            controller:'ItemViewCtrl'
        }).
        otherwise('/items/list');
});

