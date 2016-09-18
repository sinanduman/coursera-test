(function() {
    "use strict";

    var x = "hello";

    angular.module("LunchCheck",[])

    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope", "$filter"];
    function LunchCheckController($scope, $filter) {
        var el = document.getElementById("div-output");
        var comma = ",";
        $scope.dishes="";
        $scope.output="";
        $scope.checkIfTooMuch = function () {
            var tmp_output = "";

            el.style.color = "red";

            if ($scope.dishes == ""){
                tmp_output = "Please enter data first!";
            }
            else{
                var arrayOfStrings = $scope.dishes.split(comma);
                if (arrayOfStrings.length <= 3) {
                    el.style.color = "green";
                    tmp_output = "Enjoy!";
                } else {
                    tmp_output = "Too much!";
                }
            }
            el.innerText = tmp_output;
        }
    }

})();
