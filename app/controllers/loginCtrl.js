"use strict";

parksApp.controller("LoginCtrl", function($scope, $window, UserFactory) {

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.login = () => {
		UserFactory.loginUser($scope.account)
		.then( (userData) => {
			$window.location.href = "#!/forests";
		});
	};

});