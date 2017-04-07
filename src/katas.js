'use strict';

function areEqual(a, b) {
  !Array.isArray(a) && (a = [a]);
  if (typeof a[a.length - 1] === 'boolean') {
    a.push(b);
    return a;
  }
  const elm = a.pop();
  a.push(Array.isArray(b) ? elm.toString() === b.toString() : elm === b);
  return a;
}

function safeStrArg(
  string,
  isStr = typeof string === 'string',
  hasLen
) {
  return string && (isStr)
    && (hasLen = string.length)
    && (hasLen > 0) && (hasLen);
}

const k = {
  /**
   * Finds & returns an element that occurs an odd number of times,
   * from within an array containing a series of elements whom appear one or several times each
   *
   * @function findElemWithOddOccurences
   * @param {Array} array - the input array of elements to be searched
   * @returns {Number}
   */
  findElemWithOddOccurences: array =>
    Array.isArray(array)
      && (
        array.filter(search => array.reduce((n, val) => n + (val === search), 0) % 2 !== 0)[0]
      ) || -1,


  /**
   * Converts a string of letters into longer string that 'accumulates' each character
   * into a certain pattern with dashes and repeated chars. Returns that pattern as a string.
   *
   * @function accum
   * @param {String} string - the input of letters to be converted
   * @returns {String|Number}
   */
  accum: string => {
    if (safeStrArg(string)) {
      String.prototype.traverse = function() {
        let i = -1;
        return this.replace(/([a-z])|([^a-z])/gi, (m, g1) => {
          if (g1) {
            i++;
            return `${m.toUpperCase() + m.toLowerCase().repeat(i)}-`;
          }
          return `[Err, bad input: "${m}". Only use letters.]-`;
        }).slice(0, -1);
      };
      return string.traverse();
    }
    return -1;
  },


  /**
   * Finds only the odd numbers of a given array,
   * without using looping, nor modifying the array.
   *
   * @function oddNums
   * @param {Array} array - an array of numbers to be filtered for only odd ones.
   * @returns {Array|Number}
   */
  oddNums(array, res = [], val, isStr = typeof array === "string") {
    if (
      Array.isArray(array) || isStr
    ) {
      isStr && (array = [...array]);
      typeof array[0] !== "number" && (array = array.map(c => parseInt(c, 10)));
      if (val = array[0]) {
        val % 2 !== 0 && (res.push(val));
        return array.length > 1
          ? (k.oddNums(array.slice(1, array.length), res))
          : typeof array[0] === 'number' && (res);
      }
    }
    return -1;
  },


  /**
   * Given a string of words, returns the length of the shortest word(s).
   *
   * @function findShort
   * @param {String} string - the source words to parse.
   * @returns {Number}
   */
  findShort(
    string,
    shortest = Number.POSITIVE_INFINITY
  ) {
    if (safeStrArg(string)) {
      for (let sub of string.split(' ')) {
        sub !== '' && (sub.length < shortest) && (shortest = sub.length);
      }
      return shortest;
    }
    return -1;
  },


  /**
   * Returns a number whose digits are each the square of each digit of the number that was passed in.
   * For example, if 9119 is passed in, returns 811181.
   *
   * @function squareDigits
   * @param {Number} number - the argument number, each digit of which to be squared
   * @returns {Number}
   */
  squareDigits: number => typeof number === 'number' && (parseInt(
    number.toString().split('').map(digit => (parseInt(digit, 10) * parseInt(digit, 10)).toString()).join(''), 10)
  ) || -1,


  /**
   * A fibonacci-like func. Given a signature array/list, returns the first n elements (signature included) of the so-seeded sequence:
   * Like a fibonacci, but sums the last 3 (instead of 2) numbers of the sequence to generate the next.
   * E.g. if start Tribonacci sequence with [1,1,1] as input (AKA signature), we have this sequence:
   * [1,1,1,3,5,9,17,31,...] But if start with [0,0,1] as a signature, the result starts with [0,1]
   * instead of [1,1], shifting the common Fibo sequence by one place.
   *
   * @function tribonacci
   * @param {Array} array - a 'signature' as an array; must contain at least 3 numbers
   * @param {Number} number - The desired length of the output pattern, must be a non-negative number
   * @returns {Array|Number}
   */
  tribonacci(array, number) {
    if (
      Array.isArray(array)
      && array.length > 2
      && typeof number === 'number'
      && number > -1
    ) {
      array = [...array];
      new Array(number).fill().map((_, i) => {
        let accum = [];
        array.slice(i).map(num => accum.push(parseInt(num, 10)));
        if (accum.length === 3) {
          array.push(accum.reduce((a, b) => a + b, 0));
          accum.shift();
        }
      });
      array.length = number;
      return array;
    }
    return -1;
  },


  /**
   * Parses strings containing arrangements of open '(' and closing ')' brackets,
   * to return the index of that string which marks the point at which an EQUAL
   * number of open and closing brackets exist, before & after the index respectively.
   *
   * @param {String} string
   * @returns {Number}
   * @constructor
   */
  // BracketsParser(
  //   string, strLen, arr
  // ) {
  //   if (
  //     (strLen = safeStrArg(string))
  //     && (
  //       string.indexOf('(') > -1
  //       || string.indexOf(')') > -1
  //     ) && (arr = [...string])
  //   ) {
  //     if (strLen === 1) {
  //       return 1;
  //     }
  //     let minIndex = 0;
  //     let maxIndex = strLen - 1;
  //     let currentIndex;
  //     while (minIndex <= maxIndex) {
  //       currentIndex = (minIndex + maxIndex) / 2 | 0;
  //
  //       const lCount = arr.slice(0, currentIndex + 1).filter(c => c === '(').length;
  //       const rCount = arr.slice(currentIndex + 1).filter(c => c === ')').length;
  //
  //       if (lCount < rCount) {
  //         minIndex = parseInt(currentIndex + ((currentIndex - currentIndex) / 2), 10) - 1;
  //       }
  //       else if (lCount > rCount) {
  //         maxIndex = parseInt(currentIndex + (currentIndex / 2), 10) + 1;
  //       }
  //       else {
  //         return currentIndex + 1;
  //       }
  //     }
  //   }
  //   return -1;
  //
  // },


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
   * and asserts against the output.
   *
   * @returns {String}
   * @constructor
   */
  VerifyAllKatas() {
    return [
      k.findElemWithOddOccurences(null),
      -1,

      k.findElemWithOddOccurences([1, 1, 3, 3, 3, 3, 26, 10, 10]),
      26,

      k.accum(null),
      -1,

      k.accum(''),
      -1,

      k.accum('abcd'),
      'A-Bb-Ccc-Dddd',

      k.oddNums(null),
      -1,

      k.oddNums('2314'),
      [3, 1],

      k.oddNums([1, 2, 3, 4, 5]),
      [1, 3, 5],

      k.findShort(''),
      -1,

      k.findShort('one two three four '),
      3,

      k.findShort('one two three four'),
      3,

      k.squareDigits(),
      -1,

      k.squareDigits(null),
      -1,

      k.squareDigits(9119),
      811181,

      k.tribonacci(null),
      -1,

      k.tribonacci([1, 1], 5),
      -1,

      k.tribonacci([1, 1, 1], 10),
      [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],

      k.tribonacci(['1', '1', '1'], 10),
      [1, 1, 1, 3, 5, 9, 17, 31, 57, 105],

      // k.BracketsParser(''),
      // -1,
      //
      // k.BracketsParser('(())'),
      // 2,
      //
      // k.BracketsParser('(())))('),
      // 4,
      //
      // k.BracketsParser(`((${' '.repeat(100000)}))`),
      // 50002,

      k.NegativeOfNegaBinary([1, 0, 0, 1, 1]),
      [1, 1, 0, 1],

      k.NegativeOfNegaBinary([1, 0, 0, 1, 1, 1]),
      [1, 1, 0, 1, 0, 1, 1],

      k.NegativeOfNegaBinary([0, 0, 1, 1, 1, 0, 1]),
      [0, 0, 1, 0, 1, 1, 1, 1]

    ]
      .reduce(areEqual)
      .filter(pass => !pass).length < 1
        && ('All katas completed.')
        || ('Failure.');
  }

};

export default k;
/**
 * Created by joec on 2/17/2017.
 */
