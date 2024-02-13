/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  const isPalindrome = (word) => {
    if (word.length <= 1) {
      return true;
    }
    if (word[0] != word[word.length - 1]) {
      return false;
    }
    return isPalindrome(word.slice(1, word.length - 1));
  };

  for (let e of words) {
    if (isPalindrome(e)) {
      return e;
    }
  }
  return "";
};

console.log(firstPalindrome(["notapalindrome", "racecar"]));
