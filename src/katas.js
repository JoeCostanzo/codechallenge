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
   * Returns an element that occurs an odd number of times,
   * out of an array containing a series of numbers that appear multiple times
   *
   * @function findElemWithOddOccurences
   * @param {Array} array
   * @returns {Number|Boolean}
   */
  findElemWithOddOccurences: array =>
    Array.isArray(array)
      && (
        array.filter(search => array.reduce((n, val) => n + (val === search), 0) % 2 !== 0)[0]
      ) || false,


  /**
   * Converts a string to a version that 'accumulates' each character in a certain pattern.
   *
   * @function accum
   * @param {String} string
   * @returns {String}
   */
  accum: string => {
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
   * Finds only the odd numbers of a given array,
   * without using looping, nor modifying the array.
   *
   * @function oddNums
   * @param {Array} array - an array of numbers to be filtered for only odd ones.
   * @returns {Array}
   */
  oddNums(array, res = [], val = array[0]) {
    val % 2 !== 0 && (res.push(val));
    return array.length > 1 ? (k.oddNums(array.slice(1, array.length), res)) : typeof array[0] === 'number' && (res) || false;
  },


  /**
   * Given a string of words, returns the length of the shortest word(s).
   *
   * @function findShort
   * @param {String} string - the source words to parse.
   * @returns {Number}
   */
  findShort(string, shortest = Number.POSITIVE_INFINITY) {
    for (let sub of string.split(" ")) {
      sub.length < shortest && (shortest = sub.length);
    }
    return shortest;
  },


  /**
   * Square every digit of a number.
   * For example, if receive 9119, return 811181.
   *
   * @function squareDigits
   * @param {Number} number
   * @returns {Number}
   */
  squareDigits: number => parseInt(
    number.toString().split("").map(digit => (parseInt(digit) * parseInt(digit)).toString()).join("")
  ),


  /**
   * A fibonacci-like fn that given a signature array/list, returns the first n elements - signature included of the so-seeded sequence:
   * Like a fibonacci, but sums the last 3 (instead of 2) numbers of the sequence to generate the next.
   * E.g. if start Tribonacci sequence with [1,1,1] as input (AKA signature), we have this sequence:
   * [1,1,1,3,5,9,17,31,...] But if start with [0,0,1] as a signature, the result starts with [0,1]
   * instead of [1,1], shifting the common Fibo sequence by one place.
   *
   * @function tribonacci
   * @param {Array} array - a "signature" as an array that must contain 3 numbers
   * @param {Number} number - must be a non-negative number
   * @returns {Array}
   */
  tribonacci(array, number) {
    new Array(number).fill().map((_, i) => {
      let accum = [];
      array.slice(i).map(_int => accum.push(_int));
      if (accum.length === 3) {
        array.push(accum.reduce((a, b) => a + b, 0));
        accum.shift();
      }
    });
    array.length = number;
    return array;
  },


  /**
   * Parses strings containing arrangements of open "(" and closing ")" brackets,
   * to return the index of that string which marks the point at which an EQUAL
   * number of open and closing brackets exist, before & after the index respectively.
   *
   * @param {String} string
   * @returns {Number}
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
   *
   * @param {Number} int
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
   *
   * @param {Array} array
   * @returns {Number}
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
   *
   * @param {Array} array
   * @returns {Array}
   * @constructor
   */
  NegativeOfNegaBinary: array =>
    k.ConvertIntToNegaBinary(-k.ConvertNegaBinaryToInt(array)),


  /**
   * Calls each of the functions herein defined,
   * with their correct implementation,
   * and verifies the output.
   *
   * @returns {String}
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