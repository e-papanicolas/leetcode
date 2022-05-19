
var MinStack = function() {
    this.dataStore = [];
    this.first = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.dataStore[this.first++] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.dataStore.pop();
    this.first--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.dataStore[this.first - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.dataStore);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */