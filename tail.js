//ASSERT EQUAL FUNCTON, TESTS IF THEY ARE EQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//HEAD FUNCTION, TAKES OUT THE FIRST ITEM OF AN ARRAY
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) { // start at 1 so that the new array will be lacking the item at index 0
    newArray.push(array[i]);
  }
  return newArray;
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //Yea I get it, so basically this thing is applying tails to words, but since words doesn't change, it only creates a new array, when you check words later it is not the new array but the words array. 
assertEqual(words.length, 3); // original array should still have 3 elements!