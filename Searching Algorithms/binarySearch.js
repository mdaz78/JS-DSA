/**
 * Write function called binarySearch which accepts a sorted array and a value
 * and returns the index at which the values exists. Otherwise, return -1.
 */
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (val > arr[mid]) {
      start = mid + 1;
    } else if (val < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -11));
