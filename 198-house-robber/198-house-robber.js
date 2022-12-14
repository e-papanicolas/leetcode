/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;

  let maxRobbedAmount = [];

  maxRobbedAmount[nums.length] = 0;
  maxRobbedAmount[nums.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; --i) {
    maxRobbedAmount[i] = Math.max(
      maxRobbedAmount[i + 1],
      maxRobbedAmount[i + 2] + nums[i]
    );
  }

  return maxRobbedAmount[0];
};
