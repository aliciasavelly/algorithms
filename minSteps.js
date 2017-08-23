function minSteps(n, B){
  let current = B.slice(0, 2);
  let total = 0;

  for (let i = 2; i < n; i++) {
    if (current + B[i] === "010" || current.slice(1, 3) + B[i] === "010") {
      i++;
      current = B[i];
      total += 1;
    } else {
      current += B[i];
      current = current.slice(Math.max(current.length - 3, 0), current.length);
    }
  }
  if (current == "010") {
    total += 1;
  }

  return total;
}
