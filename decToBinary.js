function decToBinary(n) {
  let binNum = "";
  let remainder;

  while (n > 0) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    binNum = String(remainder) + binNum;
  }

  return binNum;
}

console.log(decToBinary(4) === "100");
console.log(decToBinary(4));
console.log(decToBinary(11) === "1011");
console.log(decToBinary(11));
