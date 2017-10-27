function telephoneGame(messages) {
  let start = messages[0];

  for (let i = 0; i < messages.length; i++) {
    if (start != messages[i]) {
      return i;
    }
  }

  return -1;
}
