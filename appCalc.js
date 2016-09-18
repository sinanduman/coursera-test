(function() {
    "use strict";

    angular.module("NameCalculator", [])

    .controller("NameCalculatorController", function($scope) {

        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function() {
            var totalNameValue = calculateStringValue($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateStringValue(tmp_str) {
            var tmp_val = 0;
            for (var i = 0; i < tmp_str.length; i++) {
                tmp_val += tmp_str.charCodeAt(i);
            }
            return tmp_val;
        };

    });

})();
