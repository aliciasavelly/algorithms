// function longestValidParentheses(string) {
//   longest = 0
//   positions = []
//
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "(") {
//       positions.push(i);
//     } else {
//       if (positions.length > 0) {
//         string[string.length - 1] == "(" ? positions.pop() : positions.push(i);
//       }
//     }
//   }
//
//   if (positions.length == 0) {
//     longest = string.length;
//   } else {
//     a = string.length
//     b = 0
//     while (positions.length > 0) {
//       b = positions[positions.length - 1];
//       positions.pop();
//       longest = Math.max(longest, a - b - 1);
//       a = b;
//     }
//
//     longest = Math.max(longest, a);
//   }
//
//   console.log(positions);
//   return longest;
// }



console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(")())()()(("));
