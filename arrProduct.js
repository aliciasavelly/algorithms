function arrProduct(arr) {
  let products = [];
  let total = totalProduct(arr);

  for (let i = 0; i < arr.length; i++) {
    products.push(total / arr[i]);
  }

  return products;
}

function totalProduct(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

console.log(arrProduct([1, 3, 2, 6, 7, 4]));
// [1008, 336, 504, 168, 144, 252]
