# 219. Contains Duplicate II

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Sliding%20Window-1f883d)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/contains-duplicate-ii/)

## Problem

Given an integer array `nums` and an integer `k`, return `true` if there are
two **distinct** indices `i` and `j` such that `nums[i] == nums[j]` and
`abs(i - j) <= k`.

## Approach — Fixed-size window with a hash set

Slide a window of at most `k` previous elements, kept in a `Set` for O(1)
membership checks:

- For each `nums[i]`, if it's already in the window's set, two equal values
  are within `k` of each other — return `true` immediately.
- Otherwise add `nums[i]` to the set.
- Once the set grows past size `k`, evict the element that just fell outside
  the window (`nums[i - k]`), keeping the set a sliding view of exactly the
  last `k` elements.

If the whole array is scanned with no hit, no such pair exists.

> `solution.js` uses this sliding-window + set approach.
> `brute-force-solution.js` checks every pair directly — `O(n²)` time,
> `O(1)` space — kept alongside as the naive baseline this optimizes.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(min(n, k))` — the window never holds more than `k` elements |

## Example

```js
const Solution = require("./solution.js");
new Solution().containsNearbyDuplicate([1, 2, 3, 1], 3);       // → true
new Solution().containsNearbyDuplicate([1, 0, 1, 1], 1);       // → true
new Solution().containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // → false
```
