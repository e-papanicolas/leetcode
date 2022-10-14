/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let seen = new Set();
    
    let current = head;
    
    while(current) {
        if(seen.has(current)) return current;
        
        seen.add(current);
        current = current.next;
    }
    
    return null;
};