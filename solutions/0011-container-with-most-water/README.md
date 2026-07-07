# 11. Container With Most Water

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/container-with-most-water/)

## Problem

Given an array `heights` where `heights[i]` is the height of the `i`-th vertical
line, pick the two lines that, together with the x-axis, hold the most water.
Return that maximum area.

## Approach — Two pointers

Start with `left` at the first line and `right` at the last: the widest possible
container. Its area is `min(heights[left], heights[right]) * (right - left)`.
The only way a narrower container can hold more is with a taller limiting side,
so at each step move the pointer at the **shorter** line inward and keep the
best area seen. When the pointers meet, every candidate that could win has been
checked.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // → 49
new Solution().maxArea([1, 1]);                      // → 1
```
