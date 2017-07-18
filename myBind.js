Function.prototype.myBind = function(context, ...bindArgs) {
  return () => {
    return this.apply(context, bindArgs);
  }
}

Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...callArgs) => {
    return this.call(context, ...bindArgs, ...callArgs);
  };
}

function foo(something) {
  console.log(`my fav number is ${this.a}`);
  console.log(`my second fav number is ${something}`);
  return this.a + something;
}

let obj = {
  a: 2
}

let bar = foo.myBind(obj, 7);

let b = bar();

let bar2 = foo.myBind2(obj, 7);

let b2 = bar(4);
