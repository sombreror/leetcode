class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    //utilize the method to reverse of an array to reverse the array as the solution says.
    //we should have used the two pointers solution, even tough the time and space complexity for this solution is too: O(n) and O(1);
    //its the same as the two pointers solution.
    reverseString(s) {
        s.reverse();
    }
}

module.exports = Solution;
