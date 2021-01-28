/**
 * Write a function called sameFrequency, Given two positive integers, find out
 * if the two numbers have same frequency of digits.
 *
 * Solution must be of complexity of O(n)
 */

function sameFrequency(num1, num2) {
  const [int1inString, int2inString] = [num1.toString(), num2.toString()];

  if (int1inString.length !== int2inString.length) {
    return false;
  }

  const firstFrequencyCounter = {};
  const secondFrequencyCounter = {};

  int1inString.forEach((char) => {});
}

//  tests
sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
