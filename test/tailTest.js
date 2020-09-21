const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //Yea I get it, so basically this thing is applying tails to words, but since words doesn't change, it only creates a new array, when you check words later it is not the new array but the words array.
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = assertEqual;
module.exports = tail;