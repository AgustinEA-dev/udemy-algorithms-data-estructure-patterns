//EXERCISE 1 - FIXED SIZE
//write a function called maxSubarraySum which accepts an array of integersand a number called target. The function should calculate the maximum sum of target consecutive elements in the array

//Brute force aproach

function maxSubArraySum(arr, target) {
    if (arr.length < target) {
        return null
    }

    let maxSum = -Infinity

    for (let i = 0; i < arr.length - target + 1; i++) {
        let currentSum = 0
        for (let j = 0; j < target; j++) {
            currentSum += arr[i + j]
        }
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
        console.log(currentSum, maxSum)
    }
    return maxSum
}

const arr1 = [-2, 3, 25, 124, 3, 1, -4]
console.log(maxSubArraySum(arr1, 3))

//Sliding window refactor

function maxSubArraySumRefactor(arr, target) {
    let maxSum = 0
    let currentSum = - Infinity

    if (arr.length < target) return null

    for (let i = 0; i < target; i++) {
        maxSum += arr[i]
    }

    currentSum = maxSum

    for (let i = target; i < arr.length; i++) {
        currentSum = currentSum - arr[i - target] + arr[i]
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

console.log(maxSubArraySumRefactor(arr1, 3))

// EXERCISE 2
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
      
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2, 3, 5, 4, 10, 20], 14)



