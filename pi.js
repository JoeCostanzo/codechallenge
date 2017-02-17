'use strict';
let executionTime,
  add_sub_bool,
  pi,
  start,
  stop;

/**
 * Calculates pi using Leibniz's formula.
 *
 * [In lieu of an infinite series,
 * takes avg of two passes 8 digits in length,
 * to find the closest approx.]
 * Correct to 15 decimal places.
 *
 * @returns {number}
 */
function calculatePi(passes = [25554500, 25554502]) {
  return passes.map(n => {
    add_sub_bool = true;
    return Array(n).fill().reduce((a, _, i) => {
      if (i % 2 !== 0) {
        if (add_sub_bool = !add_sub_bool) {
          return a - 1 / i;
        }
        return a + 1 / i;
      }
      return a;
    }, 0) * 4;
  }).reduce((a, b) => a + b, 0) / 2;
}

start = new Date().getMilliseconds();
pi = calculatePi();
stop = new Date().getMilliseconds();
executionTime = stop - start;
console.log(pi); //3.141592653589793
console.log(`Execution time: ${executionTime}\n`);

/**
 * Created by joec on 2/13/2017.
 */
