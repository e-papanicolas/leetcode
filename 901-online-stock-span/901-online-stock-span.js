
var StockSpanner = function() {
    this.prices = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  
    let span = 1;
    
    while(this.prices.length && this.prices[this.prices.length - 1][0] <= price) {
        span += this.prices.pop()[1];
    }
    
    this.prices.push([price, span]);
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */