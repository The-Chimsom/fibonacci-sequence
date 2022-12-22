function fibonacciGenerator(n) {
  let number = [];
  for (let i = 0; i < n; i++) {
    if (number.length >= 2) {
      number.push(number[number.length - 1] + number[number.length - 2]);
    }
    if (number.length === 1) {
      number.push(1)
    }
    if (number.length < 1) {
      number.push(0);
    }
  }
  console.log(number);
}
fibonacciGenerator(7);
