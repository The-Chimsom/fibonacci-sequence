let array = [2, 4, 5, 6, 7];
function searchAlgorithm(n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return i;
    }
  }
  return -1;
}
console.log(searchAlgorithm(2));
