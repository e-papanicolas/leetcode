/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const split = s.trim().split(' ');
    const lastWord = split[split.length -1];
    return lastWord.length;
};