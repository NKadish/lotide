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

const takeUntil = function(array, callback) {
  //need to loopthrough the array until the item === callback
  const results = [];
  for (let item of array) { //loops through the array 
    if (callback(item) !== true) { //as long as the value is not truthy, it pushes it to the array
    results.push(item);
    } else { //once it is truthy, it returns the array, stopping the loop. 
      return results;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five'];
const results3 = takeUntil(data3, x => x === 4);
assertArraysEqual(results3, [1, 'one', 2, 'two', 3, 'three' ]);

module.exports = takeUntil;