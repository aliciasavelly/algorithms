function lonelyinteger(a) {
  let nums = new Set();

  for (let i = 0; i < a.length; i++) {
    nums.has(a[i]) ? nums.delete(a[i]) : nums.add(a[i]);
  }

  return nums.values().next().value;
}
