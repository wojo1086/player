(function() {
	'use strict';

	angular.module('Player')
	.controller('PlayerSummaryController', PlayerSummaryController);

	function PlayerSummaryController(PlayerService) {
		var vm = this;

		vm.player = PlayerService.player;
	}
})();