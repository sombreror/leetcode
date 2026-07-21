# 344. Reverse String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Two%20Pointers-8957e5)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/reverse-string/)

## Problem

Write a function that reverses a string, given as an array of characters
`s`. It must be done **in-place** with `O(1)` extra memory — no return
value, `s` itself gets modified.

## Approach — Two pointers, in-place swap

Point `left` at the start and `right` at the end of the array. Swap the
characters at both ends, then move the pointers toward the middle:

- Swap `s[left]` and `s[right]` (destructuring assignment avoids a temp variable).
- `left++`, `right--`.
- Stop once `left >= right` — the whole array has been mirrored.

> `solution.js` implements the two-pointer swap by hand.
> `js-method-solution.js` shows the equivalent using the built-in
> `Array.prototype.reverse`, same `O(n)`/`O(1)` complexity, kept as a
> quick reference.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(1)` |

## Example

```js
const Solution = require("./solution.js");
const s = ["h", "e", "l", "l", "o"];
new Solution().reverseString(s);
s; // → ["o", "l", "l", "e", "h"]
```
