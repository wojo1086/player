(function() {
	'use strict';

	angular.module('Player')
	.controller('PlayerCreateProfessionController', PlayerCreateProfessionController);

	function PlayerCreateProfessionController(PlayerService) {
		var vm = this;

		vm.player = PlayerService.player;

		vm.selectedProf = '';

		vm.profsExt = {
			'Merchant': {
				desc: 'Humans are one of the most versatile'
			},
			'Engineer': {
				desc: 'Here is a description of a Vesega'
			},
			'Pilot': {
				desc: 'Description of the Gnuans'
			},
			'Weaponry': {
				desc: 'Brek description goes here'
			}
		};

		vm.profs = Object.keys(vm.profsExt).map(function (prof) {
			return prof;
		});

		vm.setProfession = setProfession;

		function setProfession() {
			vm.player.profession.name = vm.selectedProf;
			vm.player.prof.desc = vm.profsExt[vm.selectedProf].desc;
		}
	}
})();