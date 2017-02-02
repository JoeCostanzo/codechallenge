'use strict';

let numTiers = 100,
  executionTime,
  triangle,
  start,
  stop;

function pascalOnlyRecursive(n, a) {
  if (n < 2) return a; // top row already exists

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
triangle = pascalOnlyRecursive(numTiers, [[1]]);
stop = new Date().getMilliseconds();
executionTime = stop - start;
console.log(triangle);
console.log('Execution time: ' + executionTime + '\n');

/**
 * Created by joec on 2/2/2017.
 */
