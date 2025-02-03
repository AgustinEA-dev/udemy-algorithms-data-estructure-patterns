//EXERCISE 1
//Write a function called sumZero which accepts a sorted array of integers. The funciton should find the first pair where the sum is 0.

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > 0) {
            right--
        } else left++
    }
}

console.log(sumZero([-1, 0, 1, 2, 2.5, 3]))
console.log(sumZero([-4, -2, -1, 0, 1, 2, 2.5, 3]))

//EXERCISE 2
//Implement a function called countUniqueValues, wich accepts a sorted array, and counts the unique values in the array.

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }

    arr.sort((a, b) => a - b);

    console.log(arr)

    let uniqueCount = 1
    let i = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            uniqueCount++
            i++
        } else {
            i++
        }
    }
    return uniqueCount
}

console.log(countUniqueValues([1, 3, 12, 12, 12, 45, 60])) //return 5
console.log(countUniqueValues([1, 3, 12, 12, 12, 45, 60, 65, 125, 300])) //return 8
console.log(countUniqueValues([1, 2])) //return 2
console.log(countUniqueValues([5, 1, 6, 7, 7, 7, 5, 3, 12])) //return 6

//EXERCISE 3
//Write a function called sumOfPairs which accepts a sorted array of integers and a target. The funciton should find the first pair where the sum is equal to the target.

function sumOfPairs(arr, target) {
    if (arr.length === 0) {
        return 0
    }
    arr.sort((a, b) => a - b);
    targetFloored = Math.floor(target)

    let i = 0
    let j = arr.length - 1

    while (i < j) {
        let sum = arr[i] + arr[j]

        if (sum === targetFloored) {
            console.log([arr[i], arr[j]])
            return true
        } else if (sum < target) {
            i++
        } else {
            j--
        }
    }
    return false
}

console.log(sumOfPairs([2, 2, 5, -1, 3, 10, -50, -60], -110))
console.log(sumOfPairs([2, 2, 5, -1, 3, 10, -50, -60], 12))

//EXERCISE 4
//"Check if a word is a palindrome. A palindrome is a word that reads the same from left to right as it does from right to left."

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // No es un palíndromo
        }
        left++;
        right--;
    }

    return true; // Es un palíndromo
}

console.log(isPalindrome("rato"))
console.log(isPalindrome("ama"))
console.log(isPalindrome("anilina"))

//EXERCISE 5
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, target) {
    if (arr.length === 0) {
        return false
    }
    arr.sort((a, b) => a - b);

    let first = 0
    let last = arr.length - 1

    while (first < last) {
        let average = (arr[first] + arr[last]) / 2
        if (average === target) {
            console.log([arr[first], arr[last]])
            return true
        } else if (average < target) {
            first++
        } else {
            last--
        }
    }
    return false
}

averagePair([1, 2, 2.5, 3, 7], 2.5)

//EXERCISE 6
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let i = 0
    let j = 0

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++
        if (i === str1.length) return true
        j++
    }
    return false
}

console.log(isSubsequence("hello", "hello world")) //true
console.log(isSubsequence('sing', 'sting'))//true
console.log(isSubsequence('abc', 'abracadabra'))//true
console.log(isSubsequence('abc', 'acb'))//false(order matters)







