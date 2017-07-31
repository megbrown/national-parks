"use strict";

parksApp.controller("RegisterCtrl", function($scope, $window, UserFactory) {

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.registerUser = () => {
		UserFactory.createUser($scope.account)
		.then( (userData) => {
			$window.location.href = "#!/forests";
		});
	};

});