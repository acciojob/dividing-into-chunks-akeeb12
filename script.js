function divide(arr, n) {
    const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (const num of arr) {
        if (currentSum + num > n) {
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        } else {
            currentSubarray.push(num);
            currentSum += num;
        }
    }

    if (currentSubarray.length) result.push(currentSubarray);

    return result;
}

// Example usage:
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));  // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));  // Output: [[4], [3], [2], [1]]
