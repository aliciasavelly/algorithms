let str = "foot fool buffoon".replace(/foo/g, "bar");
console.log(str);
console.log(str === "bart barl bufbarn");

let str2 = "Peter has 8 dollars and Jane has 15";
let match2 = str2.match(/\d+/g);
console.log(match2);
// [ '8', '15' ]
// returns all in string that matches it

let str3 = "(248)842-6297";
