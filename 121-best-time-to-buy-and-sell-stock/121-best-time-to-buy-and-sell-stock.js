/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    
    let low = Infinity;
    let high = -Infinity;
    let currProfit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        let curr = prices[i];
        if(curr < low) {
            low = curr;
            high = curr;
        }
        
        if(curr > high) high = curr;
        
        currProfit = high - low;
        
        if(currProfit > maxProfit) maxProfit = currProfit;
        
    }
    return maxProfit;
};