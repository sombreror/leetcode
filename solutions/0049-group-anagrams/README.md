# 49. Group Anagrams

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-fbab2c)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/group-anagrams/)

## Problem

Given an array of strings `strs`, group the anagrams together. The answer may be
returned in any order.

## Approach — Character-count key

For each word, build a **26-slot histogram** of its letters and serialize it into
a key (`count.join("#")`). All anagrams produce the same histogram, so they land
in the same bucket of a hash map.

| Complexity | Value |
|------------|-------|
| Time  | `O(n · k)` |
| Space | `O(n · k)` |

*(n = number of words, k = max word length)*

> 💡 An alternative uses the sorted word as the key — cleaner to read but `O(n · k log k)`.

## Example

```js
const Solution = require("./solution.js");
new Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// → [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```
