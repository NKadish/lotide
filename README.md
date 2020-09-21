# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nkadish/lotide`

**Require it:**

`const _ = require('@nkadish/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: checks to see if two arrays are the same as one another
* `assertEqual(actual, expected)`: checks to see if the value put in is the same as what the expected output is
* `assertObjectsEqual(actual, expected)`: checks to see if the outputted object is the same as the expected object 
* `countLetters(sentence)`: counts the number of letters in a sentence 
* `countOnly(allItems, itemsToCount`: takes in an array and an object of what you want to count, and counts the number of times something from the object is in the array
* `eqArrays(array1, array2)`: checks to see if two arrays are the same 
* `eqObjects(object1, object2)`: checks to see if two objects are the same 
* `findKey(object, callback)`: looks through the values of each key in an object for the one specified in the callback, returning the first key associated with that value 
* `findKeyByValue(objectToSearch, valInput)`: searches through an object for the specified value, returning the key associated with it
* `flatten(arrayWithNested)`: un-nests an array, taking a nested array and returning the flattened version of it 
* `head(array)`: returns the first item in an array
* `letterPositions(sentence)`: takes a sentence and populates an object with a key for each letter in the sentence, the value of the keys being an array with the index of each time that letter shows up 
* `map(array, callback)`: modifies the array by the callback
* `middle(array)`: finds the middle of an array and returns a new array with it. if the array is even it returns the two middle numbers and if the passed in array has two or less items it returns an empty array 
* `tail(array)`: returns an array with everything but the first item of the passed in array
* `takeUntil(array, callback)`: creates a new array that has all items up to whatever was passed into the callback
* `without(source, itemsToRemove)`: removes the specified items from the source array
