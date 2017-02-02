'use strict';

function oddNums(arr, res, val = arr.pop()) {
  val % 2 !== 0 && (res.push(val));
  return arr.length > 0 ? (oddNums(arr, res)) : res;
}

let result = oddNums([1, 2, 3, 4, 5], []).sort((a, b) => a - b);
console.log(result);