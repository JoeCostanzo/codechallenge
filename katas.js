'use strict';

const areEqual = (a, b) => {
  !Array.isArray(a) && (a = [a]);
  if (typeof a[a.length - 1] === "boolean") {
    a.push(b);
    return a;
  }
  const elm = a.pop();
  a.push(Array.isArray(b) ? elm.toString() === b.toString() : elm === b);
  return a;
};


const k = {
  /**
   * Returns an element that occurs an odd number of times, out of an array containing a series of numbers that appear multiple times
   * @param array
   * @returns number
   */
  findElemWithOddOccurences: array => array.filter(search => array.reduce((n, val) => n + (val === search), 0) % 2 !== 0)[0],


  /**
   * Converts a string to a version that 'accumulates' each character in a certain pattern.
   * @param string
   * @returns string
   */
  accum(string) {
    String.prototype.traverse = function() {
      let i = -1;
      return this.replace(/([a-z])|([^a-z])/gi, (m, g1) => {
        if (g1) {
          i++;
          return `${m.toUpperCase() + m.toLowerCase().repeat(i)}-`;
        }
        return "Err: bad input.";
      }).slice(0, -1);
    };
    return string.traverse();
  },


  /**
   * Finds only the odd numbers of a given array, without using looping, nor modifying the array.
   * @param arr - Supply an array of numbers to be filtered for only odd ones.
   * @returns {Array}
   */
  oddNums(arr, res = [], val = arr[0]) {
    val % 2 !== 0 && (res.push(val));
    return arr.length > 1 ? (k.oddNums(arr.slice(1, arr.length), res)) : typeof arr[0] === 'number' && (res) || false;
  },


  /**
   * Given a string of words, returns the length of the shortest word(s).
   * @param s - supply the source words to parse.
   * @param shortest - initializer var to hold the answer.
   * @returns {Number}
   */
  findShort(s, shortest = Number.POSITIVE_INFINITY) {
    for (let sub of s.split(" ")) {
      sub.length < shortest && (shortest = sub.length);
    }
    return shortest;
  },


  /**
   * Square every digit of a number.
   * For example, if receive 9119, return 811181.
   * @param num
   * @returns {Number}
   */
  squareDigits: num => parseInt(
    num.toString().split("").map(digit => (parseInt(digit) * parseInt(digit)).toString()).join("")
  ),


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
  tribonacci(sig, n) {
    new Array(n).fill().map((_, i) => {
      let accum = [];
      sig.slice(i).map(_int => accum.push(_int));
      if (accum.length === 3) {
        sig.push(accum.reduce((a, b) => a + b, 0));
        accum.shift();
      }
    });
    sig.length = n;
    return sig;
  },


  /**
   * Parses strings containing arrangements of open "(" and closing ")" brackets,
   * to return the index of that string which marks the point at which an EQUAL
   * number of open and closing brackets exist, before & after the index respectively.
   * @param string
   * @returns {number}
   * @constructor
   */
  BracketsParser(
    string,
    isStr = typeof string === 'string',
    hasLen = string.length
  ) {
    if (string && isStr && hasLen) {
      const arr = [...string];
      return arr.findIndex((c, i) => {
          const lCount = arr.slice(0, i + 1).filter(c => c === "(").length;
          const rCount = arr.slice(i + 1).filter(c => c === ")").length;
          return lCount === rCount;
        }) + 1;
    }
    return -1;

  },


  /**
   * Converts an int into an array of ints representing it's value in Base -2 (negabinary) format
   * @param int
   * @returns {Array}
   * @constructor
   */
  ConvertIntToNegaBinary(int) {
    let result = [];
    int = -int;
    while (int !== 0) {
      result.push(Math.abs(int) % 2);
      int = Math.floor(int / -2);
    }
    return result;
  },


  /**
   * Converts an array of ints representing an integer in Base -2 (negabinary) format into an int
   * @param array
   * @returns {number}
   * @constructor
   */
  ConvertNegaBinaryToInt(array) {
    let i, sum = 0;
    for (i = 0; i < array.length; i++) {
      sum += array[i] * Math.pow(-2, i);
    }
    return sum;
  },


  /**
   * Takes an array of ints that are in a Base -2 (negabinary) series, representing an integer,
   * returns another array, also in Base -2 (negabinary), representing that integers's negative.
   * @param array
   * @returns {Array}
   * @constructor
   */
  NegativeOfNegaBinary: array =>
    k.ConvertIntToNegaBinary(-k.ConvertNegaBinaryToInt(array)),


  /**
   * Calls each of the functions herein defined,
   * with their correct implementation,
   * and verifies the output.
   * @returns {string}
   * @constructor
   */
  VerifyAllKatas() {
    return [
      k.findElemWithOddOccurences([1, 1, 3, 3, 3, 3, 26, 10, 10]),
      26,

      k.accum("abcd"),
      "A-Bb-Ccc-Dddd",

      k.oddNums([1, 2, 3, 4, 5]),
      [1, 3, 5],

      k.findShort('one two three four'),
      3,

      k.squareDigits(9119),
      811181,

      k.tribonacci([1,1,1], 10),
      [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],

      k.BracketsParser('(())'),
      2,

      k.BracketsParser('(())))('),
      4,

      k.NegativeOfNegaBinary([1, 0, 0, 1, 1]),
      [1, 1, 0, 1],

      k.NegativeOfNegaBinary([1, 0, 0, 1, 1, 1]),
      [1, 1, 0, 1, 0, 1, 1],

      k.NegativeOfNegaBinary([0, 0, 1, 1, 1, 0, 1]),
      [0, 0, 1, 0, 1, 1, 1, 1]

    ]
      .reduce(areEqual)
      .filter(pass => !pass).length < 1
        && ("All katas completed.")
        || ("Failure.");
  }

};

export default k;
/**
 * Created by joec on 2/17/2017.
 */
