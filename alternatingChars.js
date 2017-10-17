// This method returns the number of repeated characters in a string

function alternatingCharacters(sentence){
  let total = 0;
  let current;

  for (let i = 0; i < sentence.length; i++) {
    if (current != sentence[i]) {
      current = sentence[i];
    } else {
      total++;
      while (current == sentence[i + 1]) {
        i++;
      }
    }
  }

  return total;
}

console.log("Alternating Characters");
console.log(alternatingCharacters("allicia hi") == 1);
console.log(alternatingCharacters("coding is cool") == 1);
console.log(alternatingCharacters("hheelllloo") == 4);
console.log(alternatingCharacters("cooooodiiing") == 2);
console.log(alternatingCharacters("allicia hi"));
console.log(alternatingCharacters("coding is cool"));
console.log(alternatingCharacters("hheelllloo"));
console.log(alternatingCharacters("cooooodiiing"));
