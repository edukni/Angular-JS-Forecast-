
//CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService){ 

	$scope.city= cityService.city;
	$scope.$watch('city', function(){
		cityService.city=$scope.city;
	});
}]);

weatherApp.controller('forecastController', ['$scope','$resource','$routeParams','cityService', function($scope, $resource, $routeParams, cityService){ 
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
	$scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/find?appid=25fd96f0394bcace50a44d4439853f93");
	$scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days });
	$scope.convertToCelsius = function(degK){

		return Math.round(degK - 273.15);	
	}

	$scope.convertToDate= function(dt){

		return new Date(dt * 1000);
	
	};

}]);