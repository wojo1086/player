(function () {
	'use strict';

	angular.module('Player').config(function ($stateProvider,
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
			});
	});
})();