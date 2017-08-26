(function(demo){
	'use strict';
	demo.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "./demo.html",
			controller: 'AppCtlr',
		})
		.when('/readme', {
			templateUrl: "./readme.html",
			controller: 'AppCtlr',
		})
		.otherwise({ redirectTo: '/' });
		$locationProvider.html5Mode(true);
	});

	demo.controller('AppCtlr', function($scope){
		var self = this;

		$scope.options = [{
			name: 'label 1',
			value: 1
		}, {
			name: 'label 2',
			value: 2
		}];

		$scope.change = function (option) {
			console.log(option);
		};

		this.documentation = {
			title: 'Name of module',
			description: null,

			// Directive

			"ckDropdown": {
				description: null,
				markup: '<ck-dropdown options="" label-key="" change="" default=""></ck-dropdown>',
				properties: {
					scope: {
						"options": {
							type: 'array',
							description: 'An array of objects for dropdown options',
							value: $scope.options
						},

						"label-key": {
							type: 'string',
							description: 'The key to use as the option label',
							value: 'name'
						},

						"change": {
							type: 'function',
							description: 'The function to call when an item is selected',
							value: $scope.change
						},

						"default": {
							type: 'number',
							description: 'The default option index',
							value: 0
						},
					}
				}
			}
		};
	});
})(angular.module('app', [
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ck-dropdown'
]));
