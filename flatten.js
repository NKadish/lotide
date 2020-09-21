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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let output = eqArrays(arrayOne, arrayTwo);
  if (output === true) {
    console.log("Hey sick dude the two are the same!");
  } else {
    console.log("Sorry my guy the two arrays are not the same.");
  }
};

const flatten = function(arrayWithNested) {
  let flattenedArray = []; //The new array that has been flattened
  for (let x = 0; x < arrayWithNested.length; x++) {
    if (Array.isArray(arrayWithNested[x])) {
      for (let y = 0; y < arrayWithNested[x].length; y++) {
        flattenedArray.push(arrayWithNested[x][y]);
      }
    } else {
      flattenedArray.push(arrayWithNested[x]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;