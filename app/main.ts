/// <reference path="../typings/tsd.d.ts" />
/// <reference path="home/home.ts" />

module app {

    angular.module('app', ['ngRoute'])
        .config(function ($locationProvider:angular.ILocationProvider, $routeProvider:angular.route.IRouteProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'home/home.html',
                    controller: app.controllers.Home,
                    controllerAs: 'home'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    );

}