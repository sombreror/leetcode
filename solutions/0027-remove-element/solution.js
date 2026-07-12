class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0,
            right = nums.length - 1;
        let k = 0;
        while (left < right) {
            if (nums[left] === val) {
                k = val;
            } else if (nums[left] < val) {
                left++;
            } else {
                right++;
            }
        }
        return k;
    }
}
