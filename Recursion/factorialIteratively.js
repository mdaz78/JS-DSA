function factorialIteratively(num) {
  let result = 1;

  while (num !== 1) {
    result = result * num;
    num = num - 1;
  }

  return result;
}

console.log(factorialIteratively(5));
