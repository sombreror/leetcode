# 875. Koko Eating Bananas

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Binary%20Search-e3116c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/koko-eating-bananas/)

## Problem

Koko has `piles` of bananas and `h` hours before the guards return. Each
hour she picks one pile and eats up to `k` bananas from it — if the pile has
fewer than `k`, she finishes it and doesn't touch another pile that hour.
Find the **minimum** integer eating speed `k` such that she can finish every
pile within `h` hours.

## Approach — Binary search on the eating speed

The eating speed `k` isn't given directly, but the set of speeds that work
forms a contiguous range: any `k` at least as fast as some working speed
also works. That monotonic "does it work?" property is what makes `k`
itself binary-searchable, between `1` and `max(piles)`:

- For a candidate `k = mid`, compute the total hours needed:
  `sum(ceil(pile / k))` across all piles.
- If that total is `<= h`, `k` is fast enough — record it as the current
  best `result` and try something slower (`right = k - 1`) to see if an even
  smaller speed still works.
- Otherwise `k` is too slow — try faster (`left = k + 1`).

The loop converges on the smallest speed that still finishes in time.

| Complexity | Value |
|------------|-------|
| Time  | `O(n log m)` — n = number of piles, m = the largest pile |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().minEatingSpeed([3, 6, 7, 11], 8); // → 4
new Solution().minEatingSpeed([30, 11, 23, 4, 20], 5); // → 30
```
