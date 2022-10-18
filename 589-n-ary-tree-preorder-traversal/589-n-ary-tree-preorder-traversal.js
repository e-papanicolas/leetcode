/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    
    const helper = (node) => {
        if(!node) return;
        let current = node.val;
        result.push(current);
        
        node.children.forEach(child => {
            return helper(child);
        })
    }
    
    helper(root);
    
    return result;
};