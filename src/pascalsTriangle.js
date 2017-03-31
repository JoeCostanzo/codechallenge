'use strict';
let numTiers = 30,
  executionTime,
  triangle,
  start,
  stop,
  prior = '',
  buf = [];

/**
 * Finds n-tiers of Pascal's Triangle, without using looping.
 * @param n - The desired number of tiers.
 * @param a - An initial array, representing the first tier of the triangle.
 * @returns {Array}
 */
function pascalOnlyRecursive(n, a = [[1]]) {
  if (n < 2) return a; // first tier already exists

  const findCurTier = ({
    curTier = [1],
    prevTier = a[a.length - 1],
    i = 1
  }) => {
    if (i == prevTier.length) return curTier;
    curTier[i] = prevTier[i] + prevTier[i - 1];
    return findCurTier({ curTier, i: i + 1 });
  };

  let curTier = findCurTier({});

  curTier.push(1);
  a.push(curTier);

  return pascalOnlyRecursive(n - 1, a);
}

start = new Date().getMilliseconds();
triangle = pascalOnlyRecursive(numTiers).reverse();
stop = new Date().getMilliseconds();
executionTime = stop - start;


for (let tier of triangle) {
  let newLine = tier.join(" ");
  let diff = prior.length - newLine.length;
  if (diff > 0) {
    newLine = `${' '.repeat(diff/2)}${newLine}${' '.repeat(diff/2)}`;
  }
  buf.push(newLine);
  prior = newLine;
}
console.log(buf.reverse().join("\n"));
console.log(`Execution time: ${executionTime}\n`);

/**
 * Created by joec on 2/2/2017.
 */
