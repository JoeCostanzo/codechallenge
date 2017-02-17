'use strict';
let numTiers = 100,
  executionTime,
  triangle,
  start,
  stop;

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
triangle = pascalOnlyRecursive(numTiers);
stop = new Date().getMilliseconds();
executionTime = stop - start;
console.log(triangle);
console.log(`Execution time: ${executionTime}\n`);

/**
 * Created by joec on 2/2/2017.
 */
