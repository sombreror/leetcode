# 374. Guess Number Higher or Lower

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Binary%20Search-e74c3c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/guess-number-higher-or-lower/)

## Problem

A number in `[1, n]` has been picked, and you must guess it. Each guess is
checked through a pre-built API:

```
guess(num) → -1  if num is higher than the picked number
              1  if num is lower than the picked number
              0  if num is the picked number
```

Return the picked number using as few calls to `guess` as possible.

## Approach — Binary search against the `guess()` API

The API's return value is exactly the information a binary search needs to
decide which half to keep:

- `guess(mid) === 0` → `mid` is the answer, return it.
- `guess(mid) === 1` → the picked number is higher, move `left = mid + 1`.
- `guess(mid) === -1` → the picked number is lower, move `right = mid - 1`.

Each call halves the remaining range, so the picked number is found in
logarithmic time instead of scanning `1..n` one by one.

| Complexity | Value |
|------------|-------|
| Time  | `O(log n)` |
| Space | `O(1)` |

## Example

`guess` is provided by the LeetCode judge at runtime, not by this file, so it
can't be run standalone the way the other solutions can — it needs a mock:

```js
const Solution = require("./solution.js");

// mock guess(): pretend the picked number is 6
global.guess = (num) => (num > 6 ? -1 : num < 6 ? 1 : 0);

new Solution().guessNumber(10); // → 6
```
