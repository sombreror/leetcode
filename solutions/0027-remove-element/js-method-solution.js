class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //this is a solution that is less optimal. In fact this solution is O(n^2);
        //the other one is a better solution, and is faster. This one is more simple since we use the js methods.
        while (nums.indexOf(val) !== -1) {
            nums.splice(nums.indexOf(val), 1);
        }
        return nums.length;
    }
}

module.exports = Solution;
