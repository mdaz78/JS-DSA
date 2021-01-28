/**
 * Write a function called sumZero which accepts a sorted array of integers,
 * The function should find the first pair where the sum is 0. Return an array
 * that includes both values that sum to zero or undefined if a pair does not exist.
 */

function sumZero(numbers) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const numberAtStartPosition = numbers[start];
    const numberAtEndPosition = numbers[end];
    const sum = numberAtStartPosition + numberAtEndPosition;

    if (sum === 0) {
      return [numberAtStartPosition, numberAtEndPosition];
    }

    if (sum > 0) {
      end += 1;
    } else {
      start += 1;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10])); // undefined

/**
 * Time complexity => O(n)
 * Space complexity => O(1)
 */
