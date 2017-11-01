// a pangram is a sentence with every letter of the alphabet
// at least once

function pangram(sentence) {
  let chars = sentence.split("");
  let charsSet = new Set;

  for (let i = 0; i < chars.length; i++) {
    charsSet.add(chars[i].toLowerCase());
  }

  charsSet.delete(' ');
  return (charsSet.size != 26 ? "not pangram" : "pangram");
}

console.log(pangram("We promptly judged antique ivory buckles for the next prize") === "pangram");
console.log(pangram("We promptly judged antique ivory buckles for the prize") === "not pangram");
console.log(pangram("abcdefghijklmnopqrsTUVWXYZ") === "pangram");
console.log(pangram("abcdefghijklmnopqrsTUVWXYZabc") === "pangram");
console.log(pangram("i love to code") === "not pangram");
// console.log(pangram("We promptly judged antique ivory buckles for the next prize"));
// console.log(pangram("We promptly judged antique ivory buckles for the prize"));
// console.log(pangram("abcdefghijklmnopqrsTUVWXYZ"));
// console.log(pangram("abcdefghijklmnopqrsTUVWXYZabc"));
// console.log(pangram("i love to code"));
