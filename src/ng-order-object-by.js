'use strict';

(
  function(angular) {
    return angular
      .module('ngOrderObjectBy', [])
      .filter('orderObjectBy', function() {
        return function (items, field, reverse) {
          var filtered = [];
          angular.forEach(items, function(item) {
            filtered.push(item);
          });
		  function index(obj, i) {return obj[i];}
		  filtered.sort(function (a, b) {
			  return (field.split('.').reduce(index, a) > field.split('.').reduce(index, b) ? 1 : -1);
		  });
          if (reverse) {
            filtered.reverse();
          }
          return filtered;
        };
      });
  }
)(angular);
