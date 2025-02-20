// EXERCISE 1
// Start by picking the second element in the array, now compare the second element with the one before it and swap if necessary. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place. Repaeat until the array is sorted.

function insetionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(insetionSort([2, 1, 9, 75, 4]))

// EXERCISE 2

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) { return -1 }
    else if (a > b) { return 1 }
    return 0
}

console.log(insetionSort(kitties, strComp))

// EXERCISE 3


