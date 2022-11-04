/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    let bulls = 0;
    let cows = 0;
    
    let secMap = {};
    let guessMap = {};
    
    for(let i = 0; i < secret.length; i++) {
        if(secret[i] === guess[i]) {
            bulls++;
        } else {
            secMap[secret[i]] = secMap[secret[i]] + 1 || 1;
            guessMap[guess[i]] = guessMap[guess[i]] + 1 || 1;
        }
    }
    
    let keys = Object.keys(guessMap);
    
    for(let i = 0; i < keys.length; i++) {
        if(secMap[keys[i]]) {
            cows += Math.min(guessMap[keys[i]], secMap[keys[i]]);
        }
    }
    
    return `${bulls}A${cows}B`;
};