/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mag = {};
    
    for(let i = 0; i < magazine.length; i++) {
        mag[magazine[i]] ? mag[magazine[i]]++ : mag[magazine[i]] = 1;
    }
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(mag[ransomNote[i]]) mag[ransomNote[i]]--;
        else return false;
    }
    
    return true;
};