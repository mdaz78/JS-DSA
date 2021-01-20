/**
 * Problem statement # Given an unsorted array of numbers and another number,
 * you are required to find the index at which the number would be placed if it
 * were to be inserted in a sorted version of the array of numbers.
 */

/**
 * The function getIndex has already been defined for you. However, for this
 * exercise, re-write the declaration of getIndex using arrow functions and use
 * them in its implementation as well.
 * */

// Input => An array and a number to be inserted

// Output => Lowest Index at which the number is to be inserted

// Sample Input => ([5,4,1,3],2)

// Sample Output => 1

// function getIndex(arr, number) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   const sortedArr = arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     const start = arr[i];
//     const end = arr[i + 1];

//     if (number < start) {
//       return 0;
//     }

//     if (end && number > start && number < end) {
//       return i + 1;
//     }

//     if (!end) {
//       return i + 1;
//     }
//   }
// }

const getIndex = (arr, number) =>
  arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

console.log(getIndex([5, 4, 1, 3], 2)); // insert in middle
console.log(getIndex([5, 4, 2, 3], 1)); // insert at beginning
console.log(getIndex([5, 4, 2, 3, 1], 6)); // insert at end
