/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   let result = new ListNode();
    let current = result;
    
    let carryover = 0;
    while(l1 || l2 || carryover) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        let val = val1 + val2 + carryover;
        carryover = Math.floor(val / 10);
        val = val % 10;
        current.next = new ListNode(val);
        
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return result.next;
};
