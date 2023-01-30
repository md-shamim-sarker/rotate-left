/*
Problem: The statement that we’ll be getting an array as an input [1,2,3,4,5] along with an integer. Then, we need to shift each of the array’s elements unit to the left. For example, if 2 left rotations are performed on an array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].
*/
const rotateLeft = (arr, n) => {

    // Error Handling 1
    if(!Array.isArray(arr)) {
        return "Message: First argument must be an array.";
    }

    // Error Handling 2
    if(!arr.includes(n)) {
        return "Message: Second argument must be included in first argument array.";
    }

    let resultArray = [];

    for(let i = n; i < arr.length; i++) {
        resultArray.push(arr[i]);
    }

    for(let j = 0; j < n; j++) {
        resultArray.push(arr[j]);
    }

    return resultArray;
};

// console.log(rotateLeft([1, 2, 3, 4, 5], 3));