function gemstones(arr){
  let result = 0;
  let elements = {};
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == 0) {
        if (elements[arr[i][j]] == undefined) {
          elements[arr[i][j]] = 1;
        }
      } else {
        if (elements[arr[i][j]] == i) {
          elements[arr[i][j]] += 1;
        }
      }
    }
  }

  for (let element in elements) {
    if (elements[element] == len) {
      result += 1;
    }
  }

  return result;
}
