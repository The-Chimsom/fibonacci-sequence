function permutation(s) {
  const split = s.split("");
  let array = [];
  for (let i = 0; i < split.length; i++) {
    const firstVal = isNaN(Number(split[i]));
    const secondVal = isNaN(Number(split[i + 1]));
    if (firstVal !== secondVal) {
      array.push(split[i + 1]);
      array.push(split[i]);
      console.log(i)
      i = i + 1;
      console.log(i,'2')
      console.log(array)
    } else {
      return "";
    }
  }
  return array.join("");
}
console.log(permutation("0a1b3c2d"));
