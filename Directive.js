(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('myCtrl', myCtrl)
    .directive('unorderedList', unorderedList);
    
    function myCtrl($scope) {
        $scope.products = [
            {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
            {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
            {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}];
    }
    
    function unorderedList() {
        return function (scope, element, attrs) {
            var data = scope[attrs["unorderedList"]];
            if (angular.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].name);
                }
            } else {
                console.log("not a array");
            }
        }
        
    }
})();