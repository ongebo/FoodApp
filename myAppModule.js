
var myAppModule = angular.module('myAppModule',[]);
myAppModule.filter('stripDashes', function(){
	return function(txt){
		return textToFilter.split('-').join(' ');

	};
});
myAppModule.controller('MyFilterDemoCtrl', function($scope){
	var someData = {
firstName: 'JENNA',
surname: 'GRANT',
dateJoined: new Date(2010, 2, 23),
consumption: 123.659855,
plan: 'super-basic-plan',
// Last 12 months of data usage
monthlyUsageHistory:
[123.659855,
89.645222,
97.235644,
129.555555,
188.699855,
65.652545,
123.659855,
89.645222,
97.235644,
129.555555,
188.699855,
65.652545]
};
$scope.data = someData;
}
);