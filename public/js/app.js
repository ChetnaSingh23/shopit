var app=angular.module('sampleApp', ['ui.bootstrap', 'ngAnimate','ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService','LoginService','LoginCtrl','RegisterCtrl','RegisterService']);

app.controller('AppController',['$scope', '$animate', function ($scope, $animate) {
    
    // will work as normal, if globaly disabled
    $animate.enabled(true); 
     $scope.myInterval = 50;
    $scope.slides = [
        { image: 'css/image/bags.jpg' },    
        { image:  'css/image/cosmetic.jpg' },
        { image: 'css/image/s.jpg' },
        
         { image: 'css/image/d.jpg' }
       
    ]
        
}]);