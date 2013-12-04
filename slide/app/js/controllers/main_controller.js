
(function(angular){
  angular.module('app')
    .controller('MainController',function($scope, $location, $window){
      $scope.flip = function($event, prevPage, nextPage){
        if($event.x < $window.outerWidth/2){
          $location.path(prevPage);
        }else{
          $location.url(nextPage);
        }
      };
    });
})(angular);