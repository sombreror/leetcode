# 217. Contains Duplicate

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/contains-duplicate/)

## Problem

Given an integer array `nums`, return `true` if any value appears at least twice,
and `false` if every element is distinct.

## Approach — Hash set

Iterate through the array keeping already-seen values in a set. The first value
that is already present returns `true` early; if the loop finishes, there are no
duplicates.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(n)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().hasDuplicate([1, 2, 3, 1]); // → true
new Solution().hasDuplicate([1, 2, 3, 4]); // → false
```
