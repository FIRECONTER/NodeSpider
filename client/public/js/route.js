angular.module('myApp',['ngRoute']).config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		template:'����home'
	})
	.when('/contact',{
		template:'����concat'
	})
	.when('/',{
		
		templateUrl:'../html/'
	})
	.otherwise({redirectTo:'/'});
	
}]);