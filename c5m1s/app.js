(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope, $filter) {

	$scope.check = function () {
		
		//check if the text was entered
		if($scope.textbox === undefined) {
			$scope.message = "Please enter data first";
		}
		//count the number if items and return message
		var count = countItems($scope.textbox.trim());
		if(count <= 0) {
			$scope.message = "Please enter data first";
		}
		else if (count <= 3) {
			$scope.message = "Enjoy!";
		}
		else {
			$scope.message = "Too much!";
		}
	};
	//items count
	function countItems(string) {
		if (string == '') {
			return 0;
		}
		var array = string.split(',');
		return array.length;
	}
}

})();
