# 242. Valid Anagram

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/valid-anagram/)

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and
`false` otherwise.

## Approach — Sort & compare

Strings of different lengths can never be anagrams. Otherwise **normalize** both
strings by sorting their characters and compare the results. Simple and readable;
the cost is dominated by the sort.

| Complexity | Value |
|------------|-------|
| Time  | `O(n log n)` |
| Space | `O(n)` |

> 💡 An `O(n)` alternative counts character frequencies with a 26-slot array
> instead of sorting.

## Example

```js
const Solution = require("./solution.js");
new Solution().isAnagram("anagram", "nagaram"); // → true
new Solution().isAnagram("rat", "car");         // → false
```
