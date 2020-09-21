const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = middle;