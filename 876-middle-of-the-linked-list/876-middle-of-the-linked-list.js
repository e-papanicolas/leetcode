/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0;
    let arr =  [];
    while(head) {
        arr.push(head);
        head = head.next;
    }
    let mid;
    if((arr.length / 2) % 2 === 0) {
         mid = arr[Math.ceil(arr.length / 2)]
    } else {
        mid = arr[Math.floor(arr.length / 2)]
    }
    
    return mid;
};