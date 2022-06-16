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
    let data = [];
    
    function traverse(node) {
        if(node === null) return null;
        data.push(node.val);
        if(node.children) {
            for(let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    }
    traverse(root);
    return data;
};