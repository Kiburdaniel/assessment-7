function isPangram(sentence) {
  const letterSet = new Set();
  for (let char of sentence.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      letterSet.add(char);
    }
  }
  return letterSet.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
