angular.module("app").config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'cover.html',
    controller: 'MainController'
  });
  for(var i=1; i< 30; i++){
    $routeProvider .when('/'+i, {
      templateUrl: i+'.html',
      controller: 'MainController'
    });
  }
  $routeProvider.when('/end', {
    templateUrl: 'end.html',
    controller: 'MainController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});