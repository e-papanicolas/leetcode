/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wordOne = word1.toString().replaceAll(',', '');
    let wordTwo = word2.toString().replaceAll(',', '');
    
    return wordOne === wordTwo;
};