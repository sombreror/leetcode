# 271. Encode and Decode Strings

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-ffb800)
![Topic](https://img.shields.io/badge/Topic-Arrays%20%26%20Hashing-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e)

> 🔗 [LeetCode problem](https://leetcode.com/problems/encode-and-decode-strings/)

## Problem

Design an algorithm to **encode** a list of strings into a single string, and
**decode** that string back into the original list. The strings may contain
any characters, including the delimiter you choose to use — so a naive
`join`/`split` on a fixed separator isn't safe.

## Approach — Length-prefixed encoding

Encode each string as `<length>#<string>` and concatenate the pieces:

```
["neet", "code"] → "4#neet4#code"
```

Because every chunk starts with its own length, decoding never has to guess
where a string ends, even if the string itself contains digits or `#`:

- Read digits up to the next `#` → that's the length of the next string.
- Skip the `#`, then slice out exactly that many characters.
- Repeat from the new position until the whole encoded string is consumed.

| Complexity | Value |
|------------|-------|
| Time  | `O(n)` — n = total characters, for both encode and decode |
| Space | `O(n)` — for the encoded string / decoded list |

## Example

```js
const Solution = require("./solution.js");
const s = new Solution();

const encoded = s.encode(["neet", "code", "love", "you"]);
// → "4#neet4#code4#love3#you"

s.decode(encoded);
// → ["neet", "code", "love", "you"]
```
