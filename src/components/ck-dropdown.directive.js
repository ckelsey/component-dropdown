(function (app) {
	app.directive('ckDropdown', function () {
		return {
			restrict: 'E',
			scope: {
				options: '=',
				labelKey: '=?',
				change: '=?',
				default: '=?',
			},
			templateUrl: 'ck-dropdown.html',
			link: function (scope) {
				scope.toggled = false;

				scope.getLabel = function () {
					return scope.options[scope.default][scope.labelKey];
				};

				scope.optionLabel = function (option) {
					return option[scope.labelKey];
				};

				scope.updateLabel = function (index) {
					scope.default = index;
				};

				scope.toggle = function () {
					scope.toggled = scope.toggled ? false : true;
				};
			}
		};
	});
})(angular.module('ck-dropdown', []));
