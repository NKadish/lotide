//HEAD FUNCTION, TAKES OUT THE FIRST ITEM OF AN ARRAY
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) { // start at 1 so that the new array will be lacking the item at index 0
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;
