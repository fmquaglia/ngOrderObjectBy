'use strict';

(
  function(angular) {
    return angular
      .module('ngOrderObjectBy', [])
      .filter('orderObjectBy', function() {
        return function (items, field, reverse, numericStrings) {
          function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }
          
          var filtered = [];
          angular.forEach(items, function(item) {
            filtered.push(item);
          });
          function index(obj, i) {
            return obj[i];
          }
          filtered.sort(function (a, b) {
            var comparator;
            var reducedA = field.split('.').reduce(index, a);
            var reducedB = field.split('.').reduce(index, b);
            if (reducedA === reducedB) {
              comparator = 0;
            } else {
              if (numericStrings) {
                if (isNumeric(reducedA) && isNumeric(reducedB))
                {
                  comparator = (Number(reducedA) > Number(reducedB) ? 1 : -1);
                }                 
              } 
              else
              {
                comparator = (reducedA > reducedB ? 1 : -1);
              }
            }
            return comparator;
          });
          if (reverse) {
            filtered.reverse();
          }
          return filtered;
        };
      });
  }
)(angular);
