function numberOf1Bits(n) {
  'use strict'
  let res = 0;
  while (n != 0) {
    n = n >> 1;
    if (n & 1) 
    res++;
    console.log(n);
    console.log(res);
    console.log("----");
  }
  return res;
}

console.log(numberOf1Bits(13));
