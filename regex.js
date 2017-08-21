let str1 = "foot fool buffoon".replace(/foo/g, "bar");
console.log(str);
console.log(str === "bart barl bufbarn");

let str2 = "Peter has 8 dollars and Jane has 15";
let match2 = str2.match(/\d+/g);
console.log(match2);
// [ '8', '15' ]
// returns all in string that matches it

let str3 = "(248)842-6297";
let match3 = str3.replace(/[()-]/g, "");
console.log(match3);
console.log(match3 === "2488426297");

let str4 = "1,2, 3,  4,     5";
let match4 = str4.split(/\s*,\s*/);
console.log(match4);
// ['1', '2', '3', '4', '5']
console.log(str4);

let objRegExp = /(\w+)\s(\w+)\s(\w+)/;
let str5 = "Alicia Marie Savelly";
let str5Reverse = str5.replace(objRegExp, "$2, $3, $1");
console.log(str5Reverse);
console.log(str5.search(/\d+/) === -1);
console.log(str5.search(/\s+/) === 6);

let pattern = /ruby/;
let pattern2 = /ruby/i;
let pattern3 = /Ruby/;
console.log(pattern.test("Ruby is fun") === false);
console.log(pattern2.test("Ruby is fun") === true);
console.log(pattern2.exec("Ruby is fun and Ruby on Rails is fun too"));
console.log(pattern.source === "ruby");
