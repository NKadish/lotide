// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};
// need a function that checks through two arrays. 
const eqArrays = function (array1, array2) {
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

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(true, true));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)) 
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)) 

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)) 
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)) 