const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(true, true);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

module.exports = assertEqual;
module.exports = eqArrays;