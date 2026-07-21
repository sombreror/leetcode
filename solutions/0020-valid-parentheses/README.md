# 20. Valid Parentheses

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Stack-d4a72c)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/valid-parentheses/)

## Problem

Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[`,
`]`, determine if the input string is valid. It's valid when every opening
bracket is closed by the same type of bracket, and brackets are closed in the
correct order.

## Approach — Stack of matching brackets

Push every opening bracket onto a stack as it's seen. When a closing bracket
shows up, it must match whatever is currently on **top** of the stack — that
top element is always the most recent unmatched opener, which is exactly
what a closing bracket needs to pair with:

- Closing bracket, stack top matches it → pop, the pair is resolved.
- Closing bracket, stack top doesn't match (or the stack is empty) → invalid, return `false` immediately.

At the end, the string is valid only if the stack is empty — no unmatched
openers left over.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(n)` — worst case, all characters are openers |

## Example

```js
const Solution = require("./solution.js");
new Solution().isValid("()[]{}"); // → true
new Solution().isValid("(]");     // → false
new Solution().isValid("([)]");   // → false (wrong order)
```
