/**
 * Let’s say your teammate is working on a JavaScript code that won’t run
 *  because the brackets (square, curly, round) are not properly nested. You then
 * decide to write a Parentheses Checker function, which efficiently checks
 * whether or not the input string’s opening and closing brackets are correctly
 * nested.
 */

/**
 * Sample Input =>
 * "{ [ ] ( ) }"
 * "{ [ ( ] ) }"
 */

/**
 * Sample output =>
 * true
 * false
 */

const BRACES_MAP = {
  '[': ']',
  '{': '}',
  '(': ')',
};

/**
 * returns true if input is an opening bracket
 * input => Char
 * output => Boolean
 */
const isOpenBracket = (bracket) => {
  if (bracket === '[' || bracket === '{' || bracket === '(') {
    return true;
  }

  return false;
};

/**
 * returns a string containing just brackets
 * input => String
 * output => Array [that contains only brackets]
 */
const getBrackets = (str) => {
  const brackets = [];
  const openBrackets = Object.keys(BRACES_MAP);
  const closeBrackets = Object.values(BRACES_MAP);

  str.split('').forEach((char) => {
    if (openBrackets.includes(char) || closeBrackets.includes(char)) {
      brackets.push(char);
    }
  });

  return brackets;
};

/**
 * returns if a str contains balanced braces
 * str => String
 * output => Boolean
 */
const balancedParentheses = (str) => {
  const brackets = getBrackets(str);
  const length = brackets.length;

  // basic sanity checks
  if (length === 0) return true;
  if (length % 2 !== 0) return false;

  const stack = [];
  for (let i = 0; i < length; i++) {
    const char = brackets[i];

    if (isOpenBracket(char)) {
      stack.push(char);
    } else {
      const openingBracket = stack.pop();
      if (BRACES_MAP[openingBracket] !== char) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

console.log(balancedParentheses('{ [ ] ( ) }')); // true
console.log(balancedParentheses('{ [ ( ] ) }')); // false
