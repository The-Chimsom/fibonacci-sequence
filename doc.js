// create a function where you can call it by writig the code fibonacciGenerator(n)
// where n is the number of items in the sequence
// so it should be able to call fibonacciGenerator(3) and get [0, 1, 1] as the out put 

function fibonacciGenerator(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  console.log(sequence);
}
fibonacciGenerator(7);