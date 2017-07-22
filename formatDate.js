function formatDate(userDate) {
  let split = userDate.split("/");
  split[0] = (split[0].length < 2 ? "0" + split[0] : split[0]);
  split[1] = (split[1].length < 2 ? "0" + split[1] : split[1]);

  return split[2] + split[0] + split[1];
}

console.log(formatDate("12/31/2014"));
console.log(formatDate("1/3/2015"));
