// EXERCISE 1
//Objective: Check if two numbers have same digit frecuency
//Exercise: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
    let num1String = num1.toString()
    let num2String = num2.toString()

    if (num1String.length !== num2String.length) return false

    let counter1 = {}
    let counter2 = {}

    for (let i = 0; i < num1String.length; i++) {
        let num = num1String[i]
        counter1[num] ? counter1 += 1 : counter1[num] = 1
    }

    for (let j = 0; j < num1String.length; j++) {
        let num = num2String[j]
        counter2[num] ? counter2 += 1 : counter2[num] = 1
    }

    for (const val in counter1) {
        if (counter1[val] !== counter2[val]) return false
    }
    return true
}

console.log(sameFrequency(124, 421))

// EXERCISE 2

//Objective: Check if there are duplicates in a variable number of arguments.
//Excercise:Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...rest) {
    let counter = {}

    for (const val of rest) {
        if (counter[val]) {
            return true
        } counter[val] = 1
    }
    return false
}

console.log(areThereDuplicates(1, 2, 2, 4, 5))

//EXERCISE 3

//Objective: Count the occurrences of each element in an array (or string).
//Exercise: Write a function that takes an array of numbers or a string and returns an object that shows the frequency of each element.


function countFrecuency(element) {
    if (!element) {
        return false
    }

    let counter = {}

    for (let i = 0; i < element.length; i++) {
        let char = element[i]
        counter[char] ? counter[char] += 1 : counter[char] = 1
    }
    return counter
}

console.log(countFrecuency([1, 22, 4, 5, 4]))
console.log(countFrecuency("pronunciation"))

//EXERCISE 4
//Objective: Count how many times each word appears in a string.
//Exercise: Write a function that takes a string as input and returns the frequency of each word in that string.

function wordRecurrence(str) {
    if (!str) {
        return false
    }

    const words = str.split(" ")

    let wordCounter = {}

    for (let word of words) {
        wordCounter[word] ? wordCounter[word] += 1 : wordCounter[word] = 1
    }

    return wordCounter
}

const string = "You are my sunshine my only sunshine"

console.log(wordRecurrence(string))

//EXERCISE 5
//Objective: Count how many vowels (a, e, i, o, u) are in a string.
//Exercise: Write a function that counts the vowels in a given string and returns the total count.

function countingVowels(str, elementToCheck) {
    let totalVowels = 0
    for (let letter of str) {
        if (elementToCheck.includes(letter)) {
            totalVowels++
        }
    }
    return console.log(`The string includes ${totalVowels} vowels`)
}

console.log(countingVowels("Oid mortales el grito sagrado, libertad! libertad! libertad!", "aeiou"))

//EXERCISE 6
//Objective: Find the most frequent element in an array.
//Exercise: Write a function that returns the most frequent element in an array. If there are multiple, return the first one.

function mostFrequent(arr) {
    let count = {}

    let maxFreq = 0
    let mostFrequent

    for (let val of arr) {
        count[val] ? count[val] += 1 : count[val] = 1

        if (count[val] > maxFreq) {
            maxFreq = count[val]
            mostFrequent = val
        }
    }
    return maxFreq
}

console.log(mostFrequent([1, 22, 22, 22, 3, 3, 4, 55, 6]))

//EXERCISE 7
//Objective: Count the frequency of each character in a string, excluding spaces.
//Exercise: Write a function that takes a string as input and counts the frequency of each character (ignoring spaces).

function countFrecuencyNoSpaces(str) {
    const newStr = str.replaceAll(" ", "")

    let frequencyCounter = {}

    for (const char of newStr) {
        frequencyCounter[char] ? frequencyCounter[char] += 1 : frequencyCounter[char] = 1
    }
    return frequencyCounter
}

console.log(countFrecuencyNoSpaces("Hello World")
)











