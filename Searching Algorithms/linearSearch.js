/**
 * Write a function called linearSearch which accepts an arr and a value
 * and returns the index at which the value exists. If the value does not exist
 * in the array, return -1.
 */

function linearSearch(arr, value) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}
