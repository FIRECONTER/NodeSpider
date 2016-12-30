angular.module('myApp',['ngRoute']).config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		template:'这是home'
	})
	.when('/contact',{
		template:'这是concat'
	})
	.when('/',{
		
		templateUrl:'../html/'
	})
	.otherwise({redirectTo:'/'});
	
}]);