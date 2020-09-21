const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  let truthChecker = false; //baseline for whether the arrays are the same
  if (array1.length !== array2.length) {
    truthChecker = false;
    return truthChecker;
  } else {
    for (let x = 0; x < array1.length; x++) { //loop through the arryas
      if (array1[x] === array2[x]) { //if the two arrays are strictly equal
        truthChecker = true; //turns the baseline to true
      } else if (array1[x] !== array2[x]) {
        truthChecker = false;
        return truthChecker; //if they're not strictly equal, it makes the checker false and exits with return
      }
    }
    return truthChecker;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const firstKeys = Object.keys(object1);
  const secondKeys = Object.keys(object2);
  if (firstKeys.length !== secondKeys.length) {
    return false;
  } else {
    for (const key of firstKeys) {
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  let output = eqObjects(actual, expected);
  const inspect = require('util').inspect; //workaround to fix objects not showing up in the console log. Show up as like [object]
  if (output === true) {
    console.log(`Hey sick dude ${inspect(actual)} is the same as ${inspect(expected)}!`);
  } else {
    console.log(`Sorry my guy ${inspect(actual)} is not the same as ${inspect(expected)}.`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" , c: '3'});

module.exports = assertObjectsEqual;