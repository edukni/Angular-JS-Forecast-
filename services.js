
//SERVICES 
weatherApp.service('cityService', function(){
	this.city="London";
});

weatherApp.service('weatherService',['$resource', function($resource){
	this.GetWeather = function(city, days){

		var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/find?appid=25fd96f0394bcace50a44d4439853f93");
		
		return weatherAPI.get({q:city, cnt:days });
	};
}]);