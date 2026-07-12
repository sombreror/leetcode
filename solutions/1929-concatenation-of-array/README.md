# 1929. Concatenation of Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-2cbb5d)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/concatenation-of-array/)

## Problem

Given an integer array `nums` of length `n`, return an array `ans` of length
`2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n`
(i.e. `nums` appended to itself).

## Approach — Copy into a double-length array

Pre-allocate the result array at size `2n`, then walk `nums` once, writing
each value into both its original slot `i` and its mirrored slot `i + n`.
One pass fills the whole answer without needing to touch it twice.

> `solution.js` builds the answer manually as shown above.
> `js-method-solution.js` shows the equivalent one-liner using the built-in
> `Array.prototype.concat`, kept alongside as a quick reference.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` |
| Space | `O(n)` — for the output array |

## Example

```js
const Solution = require("./solution.js");
new Solution().getConcatenation([1, 2, 1]); // → [1, 2, 1, 1, 2, 1]
```
