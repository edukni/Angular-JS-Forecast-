
//DIRECTIVES
weatherApp.directive("weatherResultDirective", function(){

	return {
		restrict:'E',
		templateUrl: 'directives/weatherresult.html',
		replace:true,
		scope:{
			weatherResultObject: "=",
			convertToStandard:"&",
			convertToDate:"&",
			dateFormat:"@"
		}
	}

});