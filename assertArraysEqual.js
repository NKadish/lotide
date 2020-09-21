const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let output = eqArrays(arrayOne, arrayTwo);
  if (output === true) {
    console.log("Hey sick dude the two are the same!");
  } else {
    console.log("Sorry my guy the two arrays are not the same.");
  }
}

module.exports = assertArraysEqual;

