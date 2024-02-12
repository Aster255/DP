const canConstruct = (str, arr, memo = {}) => {
  //   console.log(str);
  if (str.trim() == "") return true;
  if (str in memo) {
    return memo[str];
  }

  for (let e of arr) {
    let z = str.replace(e, " ");
    // console.log(str.includes(e));
    if (str.includes(e) && canConstruct(z, arr, memo)) {
      return true;
    }
  }

  memo[str] = false;
  return memo[str];
};

console.log(canConstruct("abcdef", ["a", "b", "c", "d", "e", "f"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar", "d"])
);

console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar", "d"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "f",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false
