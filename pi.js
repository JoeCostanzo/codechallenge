'use strict';

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
    let add_sub_bool = true;
    return Array(n).fill().reduce((a, _, i) => {
        if (i % 2 !== 0) {
          if (add_sub_bool) {
            add_sub_bool = false;
            return a + 1 / i;
          }
          add_sub_bool = true;
          return a - 1 / i;
        }
        return a;
      }, 0) * 4;
  }).reduce((a, b) => a + b, 0) / 2;
}

console.log(calculatePi()); //3.141592653589793

/**
 * Created by joec on 2/13/2017.
 */
