const canSum = (n, arr, memo = {}) => {
  if (n in memo) return memo[n];
  //   console.log(n);
  if (n === 0) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    for (e of arr) {
      memo[n - e] = canSum(n - e, arr, memo);
      if (memo[n - e] === true) {
        return true;
      }
    }
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

const bestSum = (n, arr, memo = {}, memo2 = {}) => {
  if (!canSum(n, arr)) return null;
  if (n in memo2) {
    return memo2[n];
  }
  let z = [];
  for (let e of arr) {
    if (e == n) return [e];

    if (canSum(n - e, arr, memo)) {
      z.push([e, ...bestSum(n - e, arr, memo, memo2)]);
    }
  }

  z.sort((a, b) => a.length - b.length);
  memo2[n] = z[0];
  console.log(memo2);
  return z[0];
};

console.log(bestSum(100, [6, 4, 3, 1]));
// console.log(canSum(16, [3, 4]));
// console.log(canSum(9, [4, 3]));
// console.log(bestSum(7, [2, 4]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(322, [7, 14]));
