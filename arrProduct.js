// arrProduct returns an array of the same length as the input (arr)
// The result array will give us the total product of all the numbers
// included in the input array except for the number at the same position
// [1, 2, 3] => [2 * 3, 1 * 3, 1 * 2] => [6, 3, 2]

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
console.log(arrProduct([1, 2, 3]));
// [6, 3, 2]
