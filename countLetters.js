const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const results = {};
  for (const letters of sentence) {
    if (letters === ' ') { //if it's a space don't count it 
      //not satisfied with this, will ask someone about a cleaner way to not include spaces later 
    } else if (results[letters]) { //if the letter is already in results, add one
      results[letters]++;
    } else { //if there is no letter in results, make it and initialize it to one. 
      results[letters] = 1;
    }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;