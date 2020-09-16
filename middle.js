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

const middle = function (array) {
  let middleHolder = []; //accumulator, where I'll put the middle. 
  if (array.length <= 2) { // if the array has 2 or less items
    return middleHolder;
  } else if (array.length % 2 === 0) { //if the array has an even number of items
    middleHolder.push(array[Math.floor(array.length / 2) - 1]);
    middleHolder.push(array[Math.floor(array.length / 2)]);
    return middleHolder;
  } else if (array.length % 2 !== 0) {
    //hmmm how do I find the middle 
    //so like let's say we have 5 items in an array, the middle would be at index 2
    //that's only if it's odd though, so if it's odd, divide the .length by 2 
    //But dividing it by two will give us 2.5, gotta math.floor() it? Will give us two
    middleHolder.push(array[Math.floor(array.length / 2)]);
    return middleHolder;
  }
}
console.log(middle([1, 2]));