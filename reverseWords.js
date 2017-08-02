function reverseWords(message) {
  let result = [];
  let messageArr = message.split(" ");

  for (let i = messageArr.length - 1; i >= 0; i--) {
    result.push(messageArr[i]);
  }

  return result.join(" ");
}

let message = 'find you will pain only go you recordings security the into if';

console.log(reverseWords(message) == 'if into the security recordings you go only pain will you find');
