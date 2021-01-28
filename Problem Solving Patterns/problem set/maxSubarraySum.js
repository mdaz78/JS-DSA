/**
 * Write a function called maxSubarraySum which accepts an array of integers
 * and a number called n. The function should calculate the maximum sum of n consecutive
 * elements in the array.
 */

function maxSubarraySum(numbers, n) {
  if (numbers.length === 0 || numbers.length < n) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += numbers[i];
  }

  tempSum = maxSum;

  for (let i = n; i < numbers.length; i++) {
    tempSum = tempSum - numbers[i - n] + numbers[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

/**
 * Time complexity = O(n)
 * Space complexity = O(1)
 */
