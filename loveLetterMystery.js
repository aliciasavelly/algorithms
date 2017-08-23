function theLoveLetterMystery(s){
  let half1;
  let half2;
  let len = s.length;
  let total = 0;

  if (len % 2 === 0) {
    half1 = s.slice(0, len / 2);
    half2 = reverse(s.slice(len / 2, len));
  } else {
    half1 = s.slice(0, Math.floor(len / 2));
    half2 = reverse(s.slice(Math.ceil(len / 2), len));
  }

  if (half1 && half1 === half2) {
    return 0;
  }

  for (let i = 0; i < half1.length; i++) {
    total += Math.abs(half1.charCodeAt(i) - half2.charCodeAt(i));
  }

  return total;
}

function reverse(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

/*

Explanation

For the first test case, abc -> abb -> aba.
For the second test case, abcba is already a palindromic string.
For the third test case, abcd -> abcc -> abcb -> abca = abca -> abba.
For the fourth test case, cba -> bba -> aba.

*/
