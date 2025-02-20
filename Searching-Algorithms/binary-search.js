// EXERCISE 1
// 

function binarySearch(arr, val) {
    if (arr.length === 0) {
        return null
    }

    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    console.log(left, mid, right)

    while (arr[mid] !== val && left <= right) {
        if (val < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2)
        if (arr[mid] === val) {
            return mid
        }
    }
    return -1
}

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 9, 10]
console.log(binarySearch(sortedArr, 3))


