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
                // create a ul
                var ul = angular.element('<ul>');
                element.append(ul);
                for (var i = 0; i < data.length; i++) {
                    var li = angular.element('<li>');
                    li.text(data[i].name);
                    ul.append(li);
                }
            }
        }
        
    }
})();