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

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === ' ') {
        
    } else if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;

/*
Tried this but it didn't work. I think I know why. Because there is no real counter in there. It has trouble. Need a for loop for the counter.
for (const letters of sentence) {
  if (letters === ' ') { //if it's a space don't count it
    //not satisfied with this, will ask someone about a cleaner way to not include spaces later
  } else if (results[letters]) { //if the letter is already in results, add one
    results[letters].push(letters.indexOf(letters));
    console.log(sentence.indexOf(letters));
  } else { //if there is no letter in results, make it and initialize it to one.
    results[letters] = [sentence.indexOf(letters)];
  }
}*/