(function() {
	'use strict';

	angular.module('Player')
		.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;

		vm.name = '';
	}
})();