class Solution {
    /**
     * Groups anagrams together.
     * Each word becomes a 26-slot character histogram; the serialized
     * histogram is the bucket key, so all anagrams share one bucket.
     *
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const c of str) {
                count[c.charCodeAt(0) - 97]++;
            }
            const key = count.join("#");
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(str);
        }
        return Array.from(groups.values());
    }
}

module.exports = Solution;
