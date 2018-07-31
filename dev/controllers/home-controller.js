(function() {
	'use strict';

	angular.module('Player')
	.controller('HomeController', HomeController);

	function HomeController($state) {
		var vm = this;

		vm.routeToPlayerCreate = routeToPlayerCreate;

		function routeToPlayerCreate() {
			$state.go('create.race');
		}
	}
})();