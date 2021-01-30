// Sorting number in ascending order
function sortAscending(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a - b);
}

console.log(sortAscending([5, 4, 3, 2, 1]));

// Sorting number in descending order
function sortDescending(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => b - a);
}

console.log(sortDescending([1, 2, 3, 4, 5]));

// Sorting a list of string according to there length
function sortString(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a.length - b.length);
}

console.log(sortString(['zafar', 'md', 'abu']));
