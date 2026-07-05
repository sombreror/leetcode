class Solution {
    /**
     * Returns the indices of the two numbers that add up to `target`.
     * One-pass hash map: for each number, check if its complement was seen.
     *
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }
            seen.set(nums[i], i);
        }
        return [];
    }
}

module.exports = Solution;
