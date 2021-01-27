// Using helper method recursion
function collectOdds(arr) {
  const result = [];

  function helper(arr) {
    if (arr.length === 0) {
      return;
    }

    if (arr[0] % 2 !== 0) result.push(arr[0]);

    return helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

// Using Pure recursion
function pureCollectOdds(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return [];
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pureCollectOdds(arr.slice(1)));
  return newArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(collectOdds(arr));
console.log(pureCollectOdds(arr));
