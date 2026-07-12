# 74. Search a 2D Matrix

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Binary%20Search-e74c3c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/search-a-2d-matrix/)

## Problem

Given an `m x n` matrix where each row is sorted ascending and the first
integer of each row is greater than the last integer of the previous row,
return `true` if `target` exists in the matrix.

## Approach — Binary search on the flattened matrix

Because the whole matrix reads as one sorted sequence row after row, it can
be binary-searched as if it were a single 1-D array of size `ROWS * COLS`,
without actually flattening it:

- `mid` is an index into that virtual 1-D array.
- Convert it back to 2-D coordinates: `row = Math.floor(mid / COLS)`, `col = mid % COLS`.
- Compare `matrix[row][col]` to `target` and shrink `left`/`right` as usual.

An early bounds check (`target < matrix[0][0]` or `target > matrix[ROWS-1][COLS-1]`)
short-circuits the obviously-impossible cases before the search even starts.

| Complexity | Value |
|------------|-------|
| Time  | `O(log(m·n))` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
new Solution().searchMatrix(matrix, 3);  // → true
new Solution().searchMatrix(matrix, 13); // → false
```
