// EXERCISE 1
// Find the number of matches of a short string in a longer string

function findShortStringInLongString(longStr, shortStr) {
    let countOfMatches = 0

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break
        }
        if (j === shortStr.length - 1) countOfMatches++
    }
    return countOfMatches
}

console.log(findShortStringInLongString("kawatp watlo", "wat"))


