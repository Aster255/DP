// Write a function `howSum(targetSum, numbers)' that takes in a
// targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of
// elements that add up to exactly the targetSum. If there is no
// combination that adds up to the targetSum, then return null.=
// If there are multiple combinations possible, you may return any
// single one.

const canSum = (n, arr, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    for (e of arr) {
      memo[e] = canSum(n - e, arr, memo);
      if (memo[e] === true) {
        return true;
      }
    }
    memo[n] = false;
    return false;
  }
};

const howSum = (n, arr, memo = {}) => {
  const z = [];
  if (!canSum(n, arr)) return null;
  while (n) {
    for (let e of arr) {
      if (canSum(n - e, arr, memo)) {
        z.push(e);
        n = n - e;
        break;
      }
    }
  }
  return z;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
