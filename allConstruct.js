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

const allConstruct = (str, arr, memo = {}, memo2 = {}) => {
  if (str.trim() == "") return [[]];
  if (!canConstruct(str, arr, memo)) return [];
  let j = [];
  for (let e of arr) {
    let z = str.replace(e, "");
    if (str.indexOf(e) === 0 && canConstruct(z, arr, memo)) {
      let ways = allConstruct(z, arr, memo);
      ways = ways.map((x) => [e, ...x]);
      j = [...j, ...ways];
    }
  }
  return j;
};

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
