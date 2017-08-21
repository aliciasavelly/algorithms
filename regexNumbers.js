let regExp = /(^\(?\d{3}[-/).]?|^)\d{3}[-./]?\d{4}$/;
let testStrings = ["(248)842-6297","2488426297","248-842-6297","248/842/6297",
                   "/248-842/6297","2848426297aliciasavelly","842-6297","248.842.6297"];

function testRegExp(testStrings) {
  testStrings.forEach( str => {
    console.log(`${str} : ${regExp.test(str)}`);
  });
}

testRegExp(testStrings);
