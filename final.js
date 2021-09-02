function isCompoundWord(str) {

    if (!isValidWord(str)) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        if (
            isValidWord(str.substring(0, i)) &&
            isValidWord(str.substring(i, str.length))
        ) {
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