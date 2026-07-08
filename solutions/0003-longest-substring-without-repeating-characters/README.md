# 3. Longest Substring Without Repeating Characters

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Sliding%20Window-9b59b6)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem

Given a string `s`, find the length of the **longest substring** without
duplicate characters.

## Approach — Sliding window + last-seen map

Keep a variable window `[left, right]` with no repeated characters, and a `Map`
storing the **last index** where each character was seen.

- `right` scans the string; every character updates its entry in the map.
- If `s[right]` was already seen **inside the window**, jump `left` straight
  past its previous occurrence (`lastIndex + 1`) — no need to shrink one step
  at a time.
- The `Math.max` guard keeps `left` from ever moving backward when the
  duplicate lies *before* the current window.

The window is always valid, so the answer is the largest `right - left + 1`.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(k)` — `k` = size of the character set |

## Example

```js
const Solution = require("./solution.js");
new Solution().lengthOfLongestSubstring("abcabcbb"); // → 3  ("abc")
new Solution().lengthOfLongestSubstring("bbbbb");    // → 1  ("b")
new Solution().lengthOfLongestSubstring("pwwkew");   // → 3  ("wke")
```
