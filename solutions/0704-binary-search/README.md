# 704. Binary Search

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Binary%20Search-e74c3c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/binary-search/)

## Problem

Given a sorted array of integers `nums` and an integer `target`, return the
index of `target` if it exists, otherwise return `-1`.

## Approach — Classic binary search

Maintain `left` and `right` bounds over the whole array. On each step, check
the middle element:

- Match → return its index.
- Too small → the target must be further right, so `left = mid + 1`.
- Too big → the target must be further left, so `right = mid - 1`.

The loop stops as soon as `left > right`, meaning the search space is empty
and the target isn't present.

| Complexity | Value |
|------------|-------|
| Time  | `O(log n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().search([-1, 0, 3, 5, 9, 12], 9); // → 4
new Solution().search([-1, 0, 3, 5, 9, 12], 2); // → -1 (not present)
```
