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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let output = eqArrays(arrayOne, arrayTwo);
  if (output === true) {
    console.log("Hey sick dude the two are the same!");
  } else {
    console.log("Sorry my guy the two arrays are not the same.");
  }
};

// first the without function that will take a source array and an array with things we want to remove 
const without = function (source, itemsToRemove) {
  let withoutArray = []; //accumulator array 
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++){
      console.log(source[x], itemsToRemove[y]);
      if (source[x] !== itemsToRemove[y]) {
        withoutArray.push(source[x]);
      }
    }
  }
  return withoutArray; 
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);