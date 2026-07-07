# 15. 3Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/3sum/)

## Problem

Given an integer array `nums`, return all unique triplets
`[nums[i], nums[j], nums[k]]` (with distinct indices) that sum to zero. The
result must not contain duplicate triplets.

## Approach — Sort + two pointers

Sort the array, then fix the first value `nums[i]` and look for the other two
with two pointers: `left` just after `i` and `right` at the end. If the sum is
too big move `right` inward, if too small move `left`, and on a hit record the
triplet and advance both. Duplicates are skipped twice — same `nums[i]` as the
previous iteration, and same `nums[left]` after a hit — so every triplet is
unique. Once `nums[i] > 0` no triplet can reach zero and the loop stops early.

| Complexity | Value |
|------------|-------|
| Time  | `O(n²)` |
| Space | `O(1)` (excluding the output) |

## Example

```js
const Solution = require("./solution.js");
new Solution().threeSum([-1, 0, 1, 2, -1, -4]); // → [[-1, -1, 2], [-1, 0, 1]]
new Solution().threeSum([0, 1, 1]);             // → []
new Solution().threeSum([0, 0, 0]);             // → [[0, 0, 0]]
```
