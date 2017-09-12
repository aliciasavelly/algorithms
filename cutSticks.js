function cutSticks(arr) {
  current = arr.length;
  result = [];

  while (arr.length > 0) {
    result.push(current);

    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (smallest > arr[i]) {
          smallest = arr[i];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] -= smallest;
      if (arr[i] <= 0) {
        current -= 1;
        arr.splice(i, 1);
        i -= 1
      }
    }
  }

  return result;
}
