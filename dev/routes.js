(function () {
	'use strict';

	angular.module('Player').config(function($stateProvider,
	                                        $urlRouterProvider,
	                                        $locationProvider,
	                                        $urlMatcherFactoryProvider) {



		$locationProvider
		.html5Mode(true);

		$urlMatcherFactoryProvider.strictMode(false);

		$stateProvider
		.state('/', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})
		.state('create', {
			anstract: true,
			url: '/create',
			templateUrl: 'sub-modules/create/views/create.html',
			controller: 'CreatePlayerController',
			controllerAs: 'vm'
		})
		.state('create.race', {
			url: '/race',
			views: {
				'playerSummary@create': {
					templateUrl: 'sub-modules/create/views/player-summary.html',
					controller: 'PlayerSummaryController',
					controllerAs: 'vm',
				},
				'@create': {
					templateUrl: 'sub-modules/create/views/player-create-race.html',
					controller: 'PlayerCreateRaceController',
					controllerAs: 'vm'
				}
			}
		})
		.state('create.profession', {
			url: '/profession',
			views: {
				'playerSummary@create': {
					templateUrl: 'sub-modules/create/views/player-summary.html',
					controller: 'PlayerSummaryController',
					controllerAs: 'vm',
				},
				'@create': {
					templateUrl: 'sub-modules/create/views/player-create-profession.html',
					controller: 'PlayerCreateProfessionController',
					controllerAs: 'vm'
				}
			}
		});
	});
})();