# 424. Longest Repeating Character Replacement

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Sliding%20Window-9b59b6)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/longest-repeating-character-replacement/)

## Problem

Given a string `s` and an integer `k`, you can replace at most `k` characters.
Return the length of the **longest substring containing the same letter** you
can obtain.

## Approach — Sliding window + max frequency

A window is valid when the characters that are *not* the majority one can all
be replaced:

```
windowSize − maxFrequency ≤ k
```

- `right` expands the window and updates the frequency map and `maxf`.
- When the rule breaks, shrink from `left` until it holds again.
- The answer is the largest valid `right - left + 1`.

**The subtle trick:** `maxf` is never decreased when the window shrinks.
A stale (too high) `maxf` only makes the validity check *stricter*, so it can
never produce a wrong answer — and since we only care about windows **longer**
than the best one found so far, recomputing it would buy nothing.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(26)` → `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().characterReplacement("ABAB", 2);    // → 4  (replace both A's or both B's)
new Solution().characterReplacement("AABABBA", 1); // → 4  ("ABBB" after one replacement)
```
