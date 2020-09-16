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
      console.log(key, "Actually the key:", firstKeys);
      console.log("Hey here's key of keys", object1[key], object2[key]);
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
        console.log("Checking arrays")
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        console.log("checking values")
        return false;
      }
    }
    console.log("Hello");
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4, 5] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false