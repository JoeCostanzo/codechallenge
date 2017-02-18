'use strict';
/**
 * Finds only the odd numbers of a given array, without using looping, nor modifying the array.
 * @param arr - Supply an array of numbers to be filtered for only odd ones.
 * @returns {Array}
 */
function oddNums(arr, res = [], val = arr[0]) {
  val % 2 !== 0 && (res.push(val));
  return arr.length > 1 ? (oddNums(arr.slice(1, arr.length), res)) : typeof arr[0] === 'number' && (res) || false;
}

console.log(oddNums([1, 2, 3, 4, 5]));


/**
 * Given a string of words, returns the length of the shortest word(s).
 * @param s - supply the source words to parse.
 * @param shortest - initializer var to hold the answer.
 * @returns {Number}
 */
function findShort(s, shortest = Number.POSITIVE_INFINITY) {
  for (let sub of s.split(" ")) {
    sub.length < shortest && (shortest = sub.length);
  }
  return shortest;
}

console.log(findShort('one two three four'));


/**
 * Square every digit of a number.
 * For example, if receive 9119, return 811181.
 * @param num
 * @returns {Number}
 */
const squareDigits = num => parseInt(
  num.toString().split("").map(digit => (parseInt(digit) * parseInt(digit)).toString()).join("")
);

console.log(squareDigits(9119));


/**
 * A fibonacci-like fn that given a signature array/list, returns the first n elements - signature included of the so-seeded sequence:
 * Like a fibonacci, but sums the last 3 (instead of 2) numbers of the sequence to generate the next.
 * E.g. if start Tribonacci sequence with [1,1,1] as input (AKA signature), we have this sequence:
 * [1,1,1,3,5,9,17,31,...] But if start with [0,0,1] as a signature, the result starts with [0,1]
 * instead of [1,1], shifting the common Fibo sequence by one place.
 * @param sig - array must contain 3 numbers
 * @param n - must be a non-negative number
 * @returns {Array}
 */
function tribonacci(sig, n) {
  Array(n).fill().map((_, i) => {
    let accum = [];
    sig.slice(i).map(_int => accum.push(_int));
    if (accum.length === 3) {
      sig.push(accum.reduce((a, b) => a + b, 0));
      accum.shift();
    }
  });
  sig.length = n;
  return sig;
}

console.log(tribonacci([1,1,1], 10));

/**
 * Created by joec on 2/17/2017.
 */
