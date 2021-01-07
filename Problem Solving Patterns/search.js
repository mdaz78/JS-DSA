/**
 * Given a sorted array of integers, write a function called search, that
 * accepts a value and returns the index where the value passed to the function
 * is located. If the value is not found, return -1
 */

function search(numbers, n) {
  let min = 0;
  let max = numbers.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);

    if (numbers[middle] > n) {
      max = middle - 1;
    } else if (numbers[middle] < n) {
      min = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

/**
 * Time complexity => O(log n)
 * Space complexity => O(1)
 */
