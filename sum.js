function addToZero(arr) {
  const set = new Set();
  for (let num of arr) {
    if (set.has(-num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

addToZero([]);
console.log(addToZero([]));
// -> False

addToZero([1]);
console.log(addToZero([1]));
// -> False

addToZero([1, 2, 3]);
console.log(addToZero([1, 2, 3]));
// -> False

addToZero([1, 2, 3, -2]);
// -> True
console.log(addToZero([1, 2, 3, -2]));
