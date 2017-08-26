function insertBits(n, a, b, k) {
  let nBin = n.toString(2);
  let kBin = k.toString(2);

  let diff = b - a + 1;
  if (diff > kBin.length) {
    kBin = "0".repeat(diff - kBin.length) + kBin;
  }

  nBin = "00000000" + nBin;
  let len = nBin.length;

  result = nBin.slice(0, len - b - 1) + kBin + nBin.slice(len - a, len);
  return parseInt(result, 2);
}
