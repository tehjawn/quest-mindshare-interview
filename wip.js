/**

Create a function that takes in string

isCompoundWord made up of two words

- hot dog => hotdog
- news paper => newspaper
- good bye => goodbye

- hello => false
- abcd => false
- catdog => false

 */

function isCompoundWord(str) {

    // str => Single Word (Stream of Arbitrary Characters)
    // 1. Is this a valid word in the English Dictionary?
    // 2. Does this word contain two other words that are also in the English?
    // 3. If it contains two other valid words, then return true!
    // ... Otherwise return false

    /**
     * Qs:
     * - Words inside the compound word need to be sequential, or can they be made of an arrangement of letters?
     * - Are there exactly 0, 1, or 2 words that exist in this string?
     */

    /** 
     * if (isValidWord(str)) {
     * 
     *   // method 1. substring
     * 
     *   // method 2. append to accruing string
     *   let strSoFar = ''
     *   let validWords = 0
     *   str.split('').forEach(c => {
     *     strSoFar += c
     *     if (isValidWord(strSoFar)) {
     *       validWords++
     *       strSoFar = ''
     *     }
     *   })
     * }
     */

    if (!isValidWord(str)) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        if (
            isValidWord(str.substring(0, i)) &&
            isValidWord(str.substring(i, str.length))
        ) {
            // console.log(`${str.substring(0,i)} is Word: ${isValidWord(str.substring(0, i))}`);
            // console.log(`${str.substring(i, str.length)} is Word: ${isValidWord(str.substring(i, str.length))}`);
            return true;
        }
    }
}

const isValidWord = (str) => [
    'hot',
    'dog',
    'hotdog',
    'news',
    'paper',
    'newspaper',
    'good',
    'bye',
    'goodbye',
    'hello',
    'cat',
    'dog',
].includes(str);

/**
 * 
- hot dog => hotdog
- news paper => newspaper
- good bye => goodbye

- hello => false
- abcd => false
- catdog => false
 */

console.log(`Hot: ${isCompoundWord('hot')}`)
console.log(`Hotdog: ${isCompoundWord('hotdog')}`)

console.log(`Newspaper: ${isCompoundWord('newspaper')}`)
console.log(`Catdog: ${isCompoundWord('catdog')}`)