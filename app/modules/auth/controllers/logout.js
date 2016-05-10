'use strict';

(function() {

	angular
		.module('auth')
		.controller('logoutController', ['$scope', '$state', 'localStorageServiceWrapper', logoutController]);

		function logoutController($scope, $state, localStorageServiceWrapper) {
			localStorageServiceWrapper.clearAll();
			$state.transitionTo('login');
		}
})();