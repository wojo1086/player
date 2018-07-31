(function() {
	'use strict';

	angular.module('Player')
	.controller('PlayerCreateRaceController', PlayerCreateRaceController);

	function PlayerCreateRaceController(PlayerService) {
		var vm = this;

		vm.player = PlayerService.player;

		vm.selectedRace = '';

		vm.racesExt = {
			'Human': {
				desc: 'Humans are one of the most versatile'
			},
			'Vesega': {
				desc: 'Here is a description of a Vesega'
			},
			'Gnuans': {
				desc: 'Description of the Gnuans'
			},
			'Brek': {
				desc: 'Brek description goes here'
			}
		};

		vm.races = Object.keys(vm.racesExt).map(function(race) {
			return race;
		});

		vm.setRace = setRace;

		function setRace() {
			vm.player.race.name = vm.selectedRace;
			vm.player.race.desc = vm.racesExt[vm.selectedRace].desc;
		}
	}
})();