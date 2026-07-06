# 347. Top K Frequent Elements

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/top-k-frequent-elements/)

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent
elements. The answer may be returned in any order, and it is guaranteed to be
unique.

## Approach — Count & sort by frequency

Count how many times each value appears with a `Map` (one pass over `nums`).
Then turn the map into `[value, count]` entries, sort them by count in
descending order, and keep the values of the first `k` entries.

| Complexity | Value |
|------------|-------|
| Time  | `O(n log n)` |
| Space | `O(n)` |

> 💡 Bucket sort (an array of buckets indexed by frequency, from `n` down to 1)
> avoids the sort entirely and reaches `O(n)` time.

## Example

```js
const Solution = require("./solution.js");
new Solution().topKFrequent([1, 1, 1, 2, 2, 3], 2); // → [1, 2]
new Solution().topKFrequent([1], 1);                // → [1]
```
