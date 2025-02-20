// EXERCISE 1
// Write a function that accepts an array and a value and return the index at wich the element is found, if the value is never found return -1

function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(findIndex([23, 25, 8, 10, 65, 98, 11111, 23], 65))

