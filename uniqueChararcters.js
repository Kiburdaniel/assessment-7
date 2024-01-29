function hasUniqueChars(word) {
  const CharMap = new Map();
  for (let char of word) {
    if (CharMap.has(char)) {
      return false;
    } else {
      CharMap.set(char, true);
    }
  }
  return true;
}
console.log(hasUniqueChars("The quick brown fox jumps over the lazy dog!"));
console.log(hasUniqueChars("I like cats, but not mice"));
console.log(hasUniqueChars("Monday"));
