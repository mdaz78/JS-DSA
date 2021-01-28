/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */

function countUniqueValues(numbers) {
  if (numbers.length <= 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return 1;
  }

  let uniques = 1;
  let firstPointer = 0;
  let secondPointer = 1;

  while (secondPointer < numbers.length) {
    if (numbers[firstPointer] === numbers[secondPointer]) {
      secondPointer += 1;
    } else {
      firstPointer = secondPointer;
      secondPointer += 1;
      uniques += 1;
    }
  }

  return uniques;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

/**
 * Time complexity => O(n)
 * Space complexity => O(1)
 */
