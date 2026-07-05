class Solution {
    /**
     * @param {string[]} strs => an array of strings
     * @return {string[][]}
     */
    //non è veramente molto più veloce dell'alatra ma vabbé.
    groupAnagrams(strs) {
        let map = new Map();
        for (const str of strs) {
            const count = new Array(26).fill(0); //creazione array
            for (const c of strs) {
                count[c.charCodeAt(0) - 97]++;
            }
            const key = count.join("#");
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        return Array.from(map.values());

        // let map = new Map();
        // const normalize = (str) => str.split("").sort().join("");
        // for (const str of strs) {
        //     const key = normalize(str);
        //
        //     if (!map.has(key)) {
        //        map.set(key, []);
        //     }
        //
        //     map.get(key).push(str);
        //
        // }
        //
        // return Array.from(map.values());
    }
}
