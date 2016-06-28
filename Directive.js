(function () {
    'use strict';
    
    angular.module('app', [])
    .controller('myCtrl', myCtrl)
    .directive('unorderedList', unorderedList);
    
    function myCtrl() {
        var vm = this;
        vm.products = [
            {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
            {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
            {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}];
    }
    
    function unorderedList() {
        return function (scope, element, attrs) {
            
        }
        
    }
})();