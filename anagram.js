class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const normalize = (str) => str.split("").sort().join(); // questa sarebbe praticamente una funzione, anzi lo è --
        return normalize(s) === normalize(t);

    }
}
