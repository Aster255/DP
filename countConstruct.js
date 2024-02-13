const canConstruct = (str, arr, memo = {}) => {
  if (str.trim() == "") return true;
  if (str in memo) {
    return memo[str];
  }
  for (let e of arr) {
    let z = str.replace(e, " ");
    if (str.includes(e) && canConstruct(z, arr, memo)) {
      memo[str] = true;
      return memo[str];
    }
  }
  memo[str] = false;
  return memo[str];
};

const countConstruct = (str, arr, memo = {}, memo2 = {}) => {
  if (str.trim() == "") return 1;
  if (str in memo2) return memo2[str];
  let count = 0;

  for (let e of arr) {
    if (str.indexOf(e) === 0) {
      let z = str.replace(e, "");
      if (canConstruct(z, arr, memo)) {
        count = count + countConstruct(z, arr, memo, memo2);
      }
    }
  }
  memo2[str] = count++;
  return memo2[str];
};

console.log(countConstruct("eeeee", ["e", "ee", "eee"]));
