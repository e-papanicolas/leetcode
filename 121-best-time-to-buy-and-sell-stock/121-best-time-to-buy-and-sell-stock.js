/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMax = 0;
    let left = 0;
    let right = 1;
    
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            currentMax = Math.max(currentMax, profit);
        } else left = right;
        right += 1;
    }
    
    return currentMax;
};