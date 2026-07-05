class Solution {
    /**
     * Returns true if any value appears at least twice in `nums`.
     * Track seen values in a set; the first repeat returns early.
     *
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

module.exports = Solution;
