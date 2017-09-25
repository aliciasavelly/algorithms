// given array of integers, find the two largests integers in the array

function findTwoLargest(numbers) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            second = largest;
            largest = numbers[i];
        } else if (numbers[i] > second) {
            second = numbers[i];
        }
    }

    return [largest, second];
}

console.log(findTwoLargest([3, 2, 6, 1, 9, 11]));
console.log(findTwoLargest([-111, 2, 6, 1, 9, 11]));
console.log(findTwoLargest([3, 2, 234, 1, 9, 11]));
console.log(findTwoLargest([3, 2, 6, 1, 0, 11, 234, 22,]));
console.log(findTwoLargest([3, 2, 6, 1, 0, 11, 0, 22, 11, 22])); // => [22, 22] || [22, 11]
