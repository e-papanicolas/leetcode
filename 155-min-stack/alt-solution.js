// Runtime: 114 ms, faster than 89.32% of JavaScript online submissions for Min Stack.
// Memory Usage: 49.9 MB, less than 46.56% of JavaScript online submissions for Min Stack.


var MinStack = function() {
    this.stack = [];
    this.mins = [];
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if(this.size === 0) this.mins.push(val);
    else if(val < this.mins[this.size - 1]) {
        this.mins.push(val);
    } else {
        this.mins.push(this.mins[this.size - 1]);
    }
    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.mins.pop();
    this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.size - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
