'use strict';

const pi = {
  /**
   * Calculates pi using Leibniz's formula.
   *
   * [In lieu of an infinite series,
   * takes avg of two passes 8 digits in length,
   * to find the closest approx.]
   * Correct to 15 decimal places.
   *
   * @returns {Number}
   */
  calculatePi(passes = [25554500, 25554502]) {
    let add_sub_bool;
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
  },


  /**
   *
   * @return {String}
   * @constructor
   */
  VerifyPi() {
    let mPi, executionTime, start, stop;
    console.log(`Pi calculation starting. This could take a while...`);
    start = new Date().getMilliseconds();
    mPi = pi.calculatePi();
    stop = new Date().getMilliseconds();
    executionTime = stop - start;
    console.log(mPi); //3.141592653589793
    return `Pi found. Execution time: ${executionTime}\n`;
  }

};

export default pi;

/**
 * Created by joec on 2/13/2017.
 */
