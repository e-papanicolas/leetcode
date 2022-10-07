/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let seen = new Set();
    
    while(n !== 1) {
        if(seen.has(n)) return false;
        seen.add(n);
        n = nextNum(n);
    }
    
    return true;  
};

    const nextNum = (x) => {
        let total = 0, digit = 0;
    
        while(x > 0) {
            digit = parseInt(x % 10);
            total += digit * digit;
            x = parseInt(x / 10);
        }
        return total;    
    }
