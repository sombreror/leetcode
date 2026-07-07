# 167. Two Sum II — Input Array Is Sorted

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem

Given a **1-indexed** array `numbers` sorted in non-decreasing order, find the
two numbers that add up to `target` and return their indices `[index1, index2]`
with `index1 < index2`. The solution must use constant extra space.

## Approach — Two pointers

Because the array is sorted, put `left` at the start and `right` at the end.
If the pair sums above `target` the right value is too big — move `right`
inward; if below, move `left`. On an exact match return the two positions
(shifted by one for 1-indexing). Unlike the original Two Sum, no hash map is
needed: the ordering itself steers the search.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().twoSum([2, 7, 11, 15], 9); // → [1, 2]
new Solution().twoSum([2, 3, 4], 6);      // → [1, 3]
```
