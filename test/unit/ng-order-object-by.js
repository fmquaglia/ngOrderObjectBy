'use strict';

describe('Filter: orderObjectBy', function () {

  // load the filter's module
  beforeEach(module('ngOrderObjectBy'));

  // initialize a new instance of the filter before each test
  var orderObjectBy;
  var obj = {
    person_1 : {
      name: 'Amelia',
      age: 30,
      pet: 'cat',
      grades: {
        math: 90,
        physics: 80,
        computerScience: 50
      }
    },
    person_2 : {
      name: 'Bernardette',
      age: 20,
      pet: 'cat',
      grades: {
        math: 80,
        physics: 90,
        computerScience: 100
      }
    },
    person_3 : {
      name: 'Carol',
      age: 40,
      pet: 'hedgehog',
      grades: {
        math: 100,
        physics: 50,
        computerScience: 100
      }
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

  it('should sort by pet field', function () {
    expect(orderObjectBy(obj, 'pet')).toEqual(
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by grades.math', function(){
    expect(orderObjectBy(obj, 'grades.math')).toEqual(
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by grades.math reverted', function(){
    expect(orderObjectBy(obj, 'grades.math', true)).toEqual(
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

  it('should sort by grades.physics', function(){
    expect(orderObjectBy(obj, 'grades.physics')).toEqual(
      [obj.person_3, obj.person_1, obj.person_2]
    );
  });

  it('should sort by grades.physics reverted', function(){
    expect(orderObjectBy(obj, 'grades.physics', true)).toEqual(
      [obj.person_2, obj.person_1, obj.person_3]
    );
  });

  it('should sort by grades.computerScience', function(){
    expect(orderObjectBy(obj, 'grades.computerScience')).toEqual(
      [obj.person_1, obj.person_2, obj.person_3]
    );
  });

  it('should sort by grades.computerScience reverted', function(){
    expect(orderObjectBy(obj, 'grades.computerScience', true)).toEqual(
      [obj.person_3, obj.person_2, obj.person_1]
    );
  });

});