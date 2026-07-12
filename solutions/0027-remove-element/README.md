# 27. Remove Element

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/remove-element/)

## Problem

Given an array `nums` and a value `val`, remove every occurrence of `val`
**in-place** and return the resulting length `k`. The first `k` elements of
`nums` must hold all the elements that are not `val` — order doesn't matter,
and what's beyond index `k` is irrelevant.

## Approach — In-place overwrite pointer

Keep a write pointer `k` starting at `0`. Walk the array with a read pointer
`i`:

- If `nums[i] !== val`, it belongs in the result — copy it to `nums[k]` and
  advance `k`.
- If `nums[i] === val`, skip it — nothing is written, `k` stays put.

By the end, `nums[0..k-1]` holds exactly the kept elements, compacted in
place, and `k` is the length to return.

> `solution.js` uses this single-pass pointer approach.
> `js-method-solution.js` shows a simpler but less efficient alternative —
> repeatedly `indexOf` + `splice` the value out — which is `O(n²)` since each
> `splice` shifts the remaining elements.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
const nums = [3, 2, 2, 3];
const k = new Solution().removeElement(nums, 3); // → k = 2
nums.slice(0, k); // → [2, 2]
```
