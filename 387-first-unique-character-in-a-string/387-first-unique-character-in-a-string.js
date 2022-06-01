/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let known = {};
    for(let char of s) {
        if(known.hasOwnProperty(char)) {
            known[char]++;
        } else {
            known[char] = 1;
        }
    }
    for(let [key, value] of Object.entries(known)) {
        if(value === 1) {
            return s.indexOf(key)
        }
    }
    return -1;
};