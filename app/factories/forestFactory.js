"use strict";

parksApp.factory("ForestFactory", function($q, $http, FirebaseUrl) {

	let getAllForests = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}forests.json`)
			.then( (forestData) => {
				resolve(forestData);
			})
			.catch( (err) => {
				console.log("oops", err);
				reject(err);
			});
		});
	};

	return { getAllForests };

});