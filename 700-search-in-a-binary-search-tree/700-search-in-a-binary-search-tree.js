/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let current = root;
    let found = false;
    while(current && !found) {
        if(val < current.val) {
            current = current.left;
        } else if (val > current.val) {
            current = current.right;
        } else found = true;
    }
    return found ? current : null;
};