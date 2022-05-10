/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
  for(let i = 0; i < nums.length; i++) {
      let min = i;
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[j] < nums[min]) {
              min = j;
          }
      }
      if(nums[i] !== nums[min]) {
          let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
      }
  }
    return nums;
};