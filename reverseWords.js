// basic method
// function reverseWords(message) {
//   let result = [];
//   let messageArr = message.split(" ");
//
//   for (let i = messageArr.length - 1; i >= 0; i--) {
//     result.push(messageArr[i]);
//   }
//
//   return result.join(" ");
// }

// in-place method
function reverseWords(message) {
  let messageArr = message.split(" ");
  let len = messageArr.length;

  for (let i = 0; i < len / 2; i++) {
    let temp = messageArr[len - 1 - i];
    messageArr[len - 1 - i] = messageArr[i];
    messageArr[i] = temp;
  }

  return messageArr.join(" ");
}

let message = 'find you will pain only go you recordings security the into if';
console.log(reverseWords(message) == 'if into the security recordings you go only pain will you find');
