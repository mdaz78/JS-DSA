/**
 * Naive String Search
 * Time Complexity => O(m x n), where m is length of strToSearch and
 * n is length of str
 */
function naiveStringSearch(str, strToSearch) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strToSearch.length; j++) {
      if (strToSearch[j] !== str[i + j]) {
        break;
      }

      if (j === strToSearch.length - 1) {
        count += 1;
      }
    }
  }

  return count;
}

console.log(naiveStringSearch('aaaaaaab', 'aaab'));

/**
 * Alternate way of solving naive search
 * Time Complexity => O(n)
 */
function splitCheck(str, strToSearch) {
  return str.split(strToSearch).length - 1;
}

console.log(splitCheck('aaaaaaab', 'aaab'));
