function ensure(value) {
  if (value == undefined) {
    throw "error";
    return;
  }

  return arguments;
}

console.log(ensure());
console.log(ensure(undefined));
console.log(ensure(2));
console.log(ensure(false));
console.log(ensure(0));
console.log(ensure(1, 2, 3));
