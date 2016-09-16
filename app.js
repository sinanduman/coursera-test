(function() {
  "use strict";

  var x = "hello";

  angular.module("myFirstApp",[])

  .controller("myFirstController", function ($scope) {
    $scope.name="Sinan Duman";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    }

  });

})();
