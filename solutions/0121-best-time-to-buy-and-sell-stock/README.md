# 121. Best Time to Buy and Sell Stock

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Sliding%20Window-9b59b6)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem

Given an array `prices` where `prices[i]` is the price of a stock on day `i`,
maximize the profit from choosing a single day to buy and a later day to sell.
Return `0` if no profit is possible.

## Approach — One pass, rolling minimum

Keep the **lowest price seen so far**. At each price, compute the profit of
selling today and update the running maximum. Buy low, sell high, one sweep.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().maxProfit([7, 1, 5, 3, 6, 4]); // → 5  (buy at 1, sell at 6)
new Solution().maxProfit([7, 6, 4, 3, 1]);    // → 0  (never profitable)
```
