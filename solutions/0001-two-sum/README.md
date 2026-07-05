# 1. Two Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/two-sum/)

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of
the two numbers that add up to `target`. Each input has exactly one solution and
the same element may not be used twice.

## Approach — One-pass hash map

Walk the array once. For each `nums[i]`, compute its **complement**
`target - nums[i]`. If the complement is already in the map, the pair is found;
otherwise store `nums[i] → i` and continue.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(n)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().twoSum([2, 7, 11, 15], 9); // → [0, 1]
```
