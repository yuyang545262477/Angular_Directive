(function () {
    'use strict';
    
    angular.module('2app', [])
    .controller('myCtrl', myCtrl)
    .directive('unorderedList', unorderedList);
    
    function myCtrl($scope) {
        $scope.products = [
            {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
            {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
            {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}];
        
        // $scope.incrementPrices = function () {
        //     for (var i = 0; i < $scope.products.length; i++) {
        //         var obj = $scope.products[i];
        //         obj.price++;
        //     }
        // }
    }
    
    function unorderedList() {
        return {
            link: function (scope, element, attrs) {
                scope.data = scope[attrs["unorderedList"]];
            },
            template: "<ul><li ng-repeat='item in data'>{{ item.price|currency }} </li></ul>",
            restrict: "A"
        }
        
    }
})();