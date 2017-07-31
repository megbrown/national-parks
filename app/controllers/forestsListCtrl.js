"use strict";

parksApp.controller("ForestsListCtrl", function($scope, ForestFactory) {

	ForestFactory.getAllForests()
	.then( (forests) => {
		let forestArr = [];
		let forestData = forests.data;
		Object.keys(forestData).forEach( (key) => {
			forestData[key].id = key;
			forestArr.push(forestData[key]);
		});
		$scope.forests = forestArr;
	})
	.catch( (err) => {
		console.log("error!!!", err);
	});

});
