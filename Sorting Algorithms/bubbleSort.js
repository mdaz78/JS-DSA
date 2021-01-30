/**
 * Bubble Sort => A sorting algorithm where the largest value bubble up to the
 * top
 */

function bubbleSort(arr) {
  const newArr = [...arr];
  let pass = true;

  while (pass) {
    pass = false;
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        [newArr[i + 1], newArr[i]] = [newArr[i], newArr[i + 1]];
        pass = true;
      }
    }
  }

  return newArr;
}

console.log(bubbleSort([5, 4, 3, 1, 2]));

// alternative solution
function bubbleSortAlternative(arr) {
  const newArr = [...arr];

  for (let i = newArr.length; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]];
      }
    }
  }

  return newArr;
}

console.log(bubbleSortAlternative([5, 4, 3, 1, 2]));
