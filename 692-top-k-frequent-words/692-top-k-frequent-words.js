/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    
    for(let word of words) {
        if(map[word]) map[word] +=1;
        else map[word] = 1;
    }
    
    let result = Object.keys(map).sort((a, b) => {
        let sizeCompare = map[b] - map[a];
        if(sizeCompare === 0) return a.localeCompare(b);
        else return sizeCompare;
    })
    
    return result.slice(0, k);
};
