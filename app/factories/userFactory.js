"use strict";

parksApp.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {

	var config = {
		apiKey: FBCreds.key,
		authDomain: FBCreds.authDomain
	};

	firebase.initializeApp(config);

	let currentUser = null;

	let isAuthenticated = function() {
		return $q( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( function(user) {
				if (user) {
					currentUser = user.uid;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = () => {
		return currentUser;
	};

	let loginUser = (userObj) => {
		return $q( (resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
			.then( (user) => {
				currentUser = user.uid;
				resolve(user);
			})
			.catch( (err) => {
				console.log("error", err.message);
			});
		});
	};

	return { isAuthenticated, getUser, loginUser };

});