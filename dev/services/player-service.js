(function() {
	'use strict';

	angular.module('Player')
	.factory('PlayerService', PlayerService);

	function PlayerService() {
		var player = new Player();

		return {
			player: player
		}

		function Player() {
			return {
				race: {
					name: '',
					desc: ''
				},
				profession: {
					name: '',
					desc: ''
				}
			}
		}
	}
})();