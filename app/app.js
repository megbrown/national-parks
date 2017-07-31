"use strict";

let parksApp = angular.module("ParksApp", ["ngRoute"])
.constant("FirebaseUrl", "https://health-app-c4e3a.firebaseio.com/");

parksApp.config( ($routeProvider) => {
	$routeProvider
	.when("/register", {
		templateUrl: "partials/registration.html",
		controller: "RegisterCtrl"
	})
	.when("/", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	})
	.when("/forests", {
		templateUrl: "partials/forests-list.html",
		controller: "ForestsListCtrl"
	})
	.when("/forests/favorite", {
		templateUrl: "partials/forests-fave.html",
		controller: "ForestsFavesCtrl"
	})
	.when("/forests/:id", {
		templateUrl: "partials/forests-single.html",
		controller: "ForestsSingleCtrl"
	})
	.otherwise("/");

});