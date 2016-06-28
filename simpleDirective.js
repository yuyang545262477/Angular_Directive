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
        
        $scope.incrementPrices = function () {
            for (var i = 0; i < $scope.products.length; i++) {
                var obj = $scope.products[i];
                obj.price++;
            }
        }
    }
    
    function unorderedList() {
        return function (scope, element, attrs) {
            //get scope data
            var data = scope[attrs["unorderedList"]];
            //get attrs..
            var propertyExpression = attrs["listProperty"];
            if (angular.isArray(data)) {
                // create a ul
                var ul = angular.element('<ul>');
                element.append(ul);
                for (var i = 0; i < data.length; i++) {
                    (function () {
                        
                        var _li = angular.element('<li>');
                        var index = i;
                        
                        var watchFn = function (watchScope) {
                            return watchScope.$eval(propertyExpression, data[index]);
                        };
                        scope.$watch(watchFn, function (newValue) {
                            _li.text(newValue);
                        });
                        ul.append(_li);
                    })();
                }
            }
        }
        
    }
})();