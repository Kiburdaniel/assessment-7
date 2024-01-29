function findLongestWord(words) {
  let longestLength = 0;
  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
  return longestLength;
}
console.log(findLongestWord(["hi", "hello"]));
