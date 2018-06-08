var app = angular.module('Profile_App', []);
app.controller('Profile_Controller', function($scope, $http) {
	$http.get('data.json').success(function (response) {
		$scope.data = response;
	});
});