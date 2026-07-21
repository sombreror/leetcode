# 680. Valid Palindrome II

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-8957e5)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/valid-palindrome-ii/)

## Problem

Given a string `s`, return `true` if it can become a palindrome after
deleting **at most one** character.

## Approach — Two pointers, skip one on the first mismatch

Walk `left` and `right` inward from both ends, same as a normal palindrome
check:

- While the characters match, keep closing the gap.
- On the **first** mismatch, the one allowed deletion has to fix exactly
  this pair — so there are only two candidates: drop the left character or
  drop the right one. Check whether the remaining substring is a palindrome
  either way (`isPalindrome(s, left+1, right)` or `isPalindrome(s, left, right-1)`);
  if either is, the answer is `true`.

Since a palindrome can have at most one "bad" mismatch to fix, checking
both single-deletion branches at the first mismatch is enough — there's no
need to look for further mismatches deeper in the recursion.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` — the fallback check re-scans at most once more |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
new Solution().validPalindrome("aba");  // → true (already a palindrome)
new Solution().validPalindrome("abca"); // → true (drop 'b' or 'c')
new Solution().validPalindrome("abc");  // → false
```
