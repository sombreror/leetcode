# 35. Search Insert Position

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Binary%20Search-e74c3c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/search-insert-position/)

## Problem

Given a sorted array of distinct integers `nums` and a `target` value, return
the index if the target is found. If not, return the index where it would be
**inserted** to keep the array sorted.

## Approach — Binary search

Standard binary search over `[left, right]`. On each step compare
`nums[mid]` to `target`:

- Equal → return `mid` immediately.
- `nums[mid] < target` → the insertion point is to the right, move `left = mid + 1`.
- `nums[mid] > target` → move `right = mid - 1`.

If the loop ends without a match, `left` has converged on exactly the index
where `target` belongs — it's both the "insert here" position and the
smallest index whose value is `≥ target`.

| Complexity | Value |
|------------|-------|
| Time  | `O(log n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().searchInsert([1, 3, 5, 6], 5); // → 2 (found)
new Solution().searchInsert([1, 3, 5, 6], 2); // → 1 (insert between 1 and 3)
new Solution().searchInsert([1, 3, 5, 6], 7); // → 4 (insert at the end)
```
