'use strict';

/**
 * Finds only the odd numbers of a given array, without using looping.
 * @param arr - The given array of numbers to be filtered for only odd ones.
 * @returns {Array}
 */
function oddNums(arr, res = [], val = arr.pop()) {
  val % 2 !== 0 && (res.push(val));
  return arr.length > 0 ? (oddNums(arr, res)) : res.sort((a, b) => a - b);
}

let result = oddNums([1, 2, 3, 4, 5]);
console.log(result);