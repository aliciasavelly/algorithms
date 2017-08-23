function alternatingCharacters(s){
  let total = 0;
  let current;

  for (let i = 0; i < s.length; i++) {
    if (current != s[i]) {
      current = s[i];
    } else {
      total += 1;
    }
  }

  return total;
}
