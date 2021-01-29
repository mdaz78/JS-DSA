/**
 * Write a function productOfArray which takes in an array of numbers and
 * returns the product of them all
 */

function productOfArray(numbers) {
  if (numbers.length === 0) {
    return -1;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] * productOfArray(numbers.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
