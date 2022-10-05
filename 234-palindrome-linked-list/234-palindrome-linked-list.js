/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let vals = [];
    
    while(head) {
        vals.push(head.val);
        head = head.next;
    }
    
    let left = 0;
    let right = vals.length - 1;
    
    while(left < right) {
        if(vals[left] !== vals[right]) return false;
        
        left++;
        right--;
    }
    return true;
};