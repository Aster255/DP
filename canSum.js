// Write a function `canSum(targetSum, numbers)' that takes in a
// targetSum and an array of numbers as arguments.
// The function should return a boolean indicating whether or not it
// is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

const canSum = (n, arr, memo = {}) => {
  if (n in memo) return memo[n];
  //   console.log(n);
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

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
