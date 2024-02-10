const gridtraveler = (n, m, memo = {}) => {
  let key = n + "," + m;
  if (key in memo) {
    return memo[key];
  }
  if (n === 1 || m === 1) {
    return 1;
  } else {
    memo[key] = gridtraveler(n - 1, m, memo) + gridtraveler(n, m - 1, memo);
    return memo[key];
  }
};

console.log(gridtraveler(18, 18));
