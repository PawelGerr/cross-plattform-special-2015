/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var Home = (function () {
            function Home() {
                this.text = 'Build-Prozess mit Gulp';
            }
            return Home;
        })();
        controllers.Home = Home;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="home/home.ts" />
var app;
(function (app) {
    angular.module('app', ['ngRoute'])
        .config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'home/home.html',
            controller: app.controllers.Home,
            controllerAs: 'home'
        })
            .otherwise({
            redirectTo: '/'
        });
    }]);
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS50cyIsImhvbWUvaG9tZS5qcyIsIm1haW4udHMiLCJtYWluLmpzIl0sIm5hbWVzIjpbImFwcCIsImFwcC5jb250cm9sbGVycyIsImFwcC5jb250cm9sbGVycy5Ib21lIiwiYXBwLmNvbnRyb2xsZXJzLkhvbWUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBTztBQUFQLENBQUEsVUFBTyxLQUFHO0lBQUNBLElBQUFBO0lBQUFBLENBQUFBLFVBQUFBLGFBQVlBO1FBRW5CQyxJQUFBQSxPQUFBQSxDQUFBQSxZQUFBQTtZQUFBQyxTQUFBQSxPQUFBQTtnQkFDV0MsS0FBQUEsT0FBY0E7O1lBQ3pCRCxPQUFBQTs7UUFGYUQsWUFBQUEsT0FBSUE7T0FGVkQsY0FBQUEsSUFBQUEsZ0JBQUFBLElBQUFBLGNBQVdBO0dBQWYsUUFBQSxNQUFHO0FDWVY7QUNkQTs7QUFHQSxJQUFPO0FBQVAsQ0FBQSxVQUFPLEtBQUk7SUFFUEEsUUFBUUEsT0FBT0EsT0FBT0EsQ0FBQ0E7U0FDbEJBLCtDQUFPQSxVQUFVQSxtQkFBNkNBLGdCQUEyQ0E7UUFDdEc7YUFDSyxLQUFLLEtBQUs7WUFDUCxhQUFhO1lBQ2IsWUFBWSxJQUFJLFlBQVk7WUFDNUIsY0FBYzs7YUFFakIsVUFBVTtZQUNQLFlBQVk7OztHQVh6QixRQUFBLE1BQUc7QUNjViIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgYXBwLmNvbnRyb2xsZXJzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSG9tZSB7XHJcbiAgICAgICAgcHVibGljIHRleHQ6c3RyaW5nID0gJ0J1aWxkLVByb3plc3MgbWl0IEd1bHAnO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbnZhciBhcHA7XG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIHZhciBjb250cm9sbGVycztcbiAgICAoZnVuY3Rpb24gKGNvbnRyb2xsZXJzKSB7XG4gICAgICAgIHZhciBIb21lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ0J1aWxkLVByb3plc3MgbWl0IEd1bHAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEhvbWU7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIGNvbnRyb2xsZXJzLkhvbWUgPSBIb21lO1xuICAgIH0pKGNvbnRyb2xsZXJzID0gYXBwLmNvbnRyb2xsZXJzIHx8IChhcHAuY29udHJvbGxlcnMgPSB7fSkpO1xufSkoYXBwIHx8IChhcHAgPSB7fSkpO1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiaG9tZS9ob21lLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBhcHAge1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSlcclxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uICgkbG9jYXRpb25Qcm92aWRlcjphbmd1bGFyLklMb2NhdGlvblByb3ZpZGVyLCAkcm91dGVQcm92aWRlcjphbmd1bGFyLnJvdXRlLklSb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUvaG9tZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBhcHAuY29udHJvbGxlcnMuSG9tZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICdob21lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vdGhlcndpc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiaG9tZS9ob21lLnRzXCIgLz5cbnZhciBhcHA7XG4oZnVuY3Rpb24gKGFwcCkge1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSlcbiAgICAgICAgLmNvbmZpZyhmdW5jdGlvbiAoJGxvY2F0aW9uUHJvdmlkZXIsICRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS9ob21lLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogYXBwLmNvbnRyb2xsZXJzLkhvbWUsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdob21lJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgICAgICByZWRpcmVjdFRvOiAnLydcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KShhcHAgfHwgKGFwcCA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=