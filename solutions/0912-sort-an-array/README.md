# 912. Sort an Array

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Sorting-39c5cf)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/sort-an-array/)

## Problem

Given an array of integers `nums`, sort it in ascending order and return it,
without relying on any built-in sort — the point is to implement an `O(n
log n)` comparison sort by hand.

## Approach — Merge sort

Classic divide-and-conquer: split the array in half recursively down to
single elements (already "sorted" on their own), then merge sorted halves
back together in order:

- `mergeSort(arr, l, r)` recurses on `[l, m]` and `[m+1, r]`.
- `merge(arr, l, m, r)` walks both halves with two pointers, always taking
  the smaller front element into a temp buffer, then copies the buffer back
  into `arr`.

Because each level of recursion does `O(n)` work to merge, and there are
`O(log n)` levels, the total is `O(n log n)`.

> `solution.js` implements merge sort from scratch.
> `js-method-solution.js` shows the one-line built-in alternative
> (`nums.sort((a, b) => a - b)`), kept as a quick reference — same
> asymptotic complexity in most engines, but skips reimplementing the
> algorithm.

| Complexity | Value |
|------------|-------|
| Time  | `O(n log n)` |
| Space | `O(n)` — temp buffer used while merging |

## Example

```js
const Solution = require("./solution.js");
new Solution().sortArray([5, 2, 3, 1]); // → [1, 2, 3, 5]
new Solution().sortArray([5, 1, 1, 2, 0, 0]); // → [0, 0, 1, 1, 2, 5]
```
