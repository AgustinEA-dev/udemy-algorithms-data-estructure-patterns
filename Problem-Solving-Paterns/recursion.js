// EXERCISE 1
// Write a function that accepts a number and prints all the way to 0.

function countDown(num) {
    if (num < 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

console.log(countDown(10))

// EXERCISE 2
// Write a function that returns the sum range of a given input.

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(3))

// EXERCISE 3
// Write a function that accepts a number and returns the factorial.

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(4))

// EXERCISE 4
// Write a function that collects all the even values of a given array

function collectValues(arr) {
    let evenValues = []
    function helper(helperInput) {
        if (helperInput.length === 0) return
        if (helperInput[0] % 2 === 0) {
            evenValues.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return evenValues
}

console.log(collectValues([1, 2, 3, 4, 5, 6, 7, 9, 10]))

// EXERCISE 5
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp) {
    if (exp === 0) return 1
    return base * power(base, exp - 1)
}

console.log(power(2, 5))
console.log(power(5, 3))

// EXERCISE 6
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]))


// EXERCISE 7
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
    if (num === 0) {
        return 0
    }
    return num + recursiveRange(num - 1)
}

console.log(recursiveRange(10))

// EXERCISE 8
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(8))

// EXERCISE 9
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

const string = "camello"
console.log(reverse(string))

