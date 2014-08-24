'use strict';

describe('Filter: orderObjectBy', function () {

  // load the filter's module
  beforeEach(module('ngOrderObjectBy'));

  // initialize a new instance of the filter before each test
  var orderObjectBy;
  var obj = {
    person_1 : {
      name: 'Amelia',
      age: 30
    },
    person_2 : {
      name: 'Bernardette',
      age: 20
    },
    person_3 : {
      name: 'Carol',
      age: 40
    }
  };
  beforeEach(inject(function ($filter) {
    orderObjectBy = $filter('orderObjectBy');
  }));

  it('should sort by the name field', function () {
    expect(orderObjectBy(obj, 'name')).toEqual(
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by name field reverted', function () {
    expect(orderObjectBy(obj, 'name', true)).toEqual(
      [obj.person_3, obj.person_2, obj.person_1]
    );
  });

  it('should sort by age field', function () {
    expect(orderObjectBy(obj, 'age')).toEqual(
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by age field reverted', function () {
    expect(orderObjectBy(obj, 'age', true)).toEqual(
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

});