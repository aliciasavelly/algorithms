// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

function fizzBuzz(n) {
  let msg;
  for (let i = 1; i <= n; i++, msg = "") {
    if (!(i % 3)) msg += "fizz";
    if (!(i % 5)) msg += "buzz";
    console.log(msg || i);
  }
}

fizzBuzz(22);
