/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freqs = {};
    for(let char of s) {
        if(freqs.hasOwnProperty(char)) {
            freqs[char]++;
        } else {
            freqs[char] = 1;
        }
    }
    let pairs = [];
    for(let [key, val] of Object.entries(freqs)) {
        pairs.push([key, val]);
    }
    pairs.sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else if (a[1] < b[1]) return 1;
        else if(a[1] === b[1]) return 0;
    })
    let returnVal = [];
    pairs.forEach(pair => {
        for(let i = 0; i < pair[1]; i++) {
            returnVal.push(pair[0]);
        }
    })
    return returnVal.join('');
};