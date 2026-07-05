class Solution {
    /**
     * Returns true if `t` is an anagram of `s`.
     * Different lengths can never be anagrams; otherwise compare the two
     * strings after sorting their characters.
     *
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const normalize = (str) => str.split("").sort().join("");
        return normalize(s) === normalize(t);
    }
}

module.exports = Solution;
