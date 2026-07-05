# 125. Valid Palindrome

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-e67e22)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/valid-palindrome/)

## Problem

A phrase is a palindrome if, after converting all uppercase letters to lowercase
and removing all non-alphanumeric characters, it reads the same forward and
backward. Given a string `s`, return `true` if it is a palindrome.

## Approach — Filter & compare with reverse

Walk the string once, keeping only the alphanumeric characters and lowercasing
them into an array. Join it into a string, then compare it against its reverse:
equal means the phrase is a palindrome.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(n)` |

> 💡 A two-pointer scan (moving inward from both ends, skipping non-alphanumeric
> characters) reaches the same answer in `O(1)` extra space.

## Example

```js
const Solution = require("./solution.js");
new Solution().isPalindrome("A man, a plan, a canal: Panama"); // → true
new Solution().isPalindrome("race a car");                     // → false
```
