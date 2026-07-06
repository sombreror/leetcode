<h1 align="center">🧩 LeetCode Solutions</h1>

<p align="center">
  My LeetCode solutions — one folder per problem, with a write-up and runnable code.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-f7df1e?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Solved-7-2cbb5d" alt="Solved">
  <img src="https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Graph-auto--updated-8a2be2" alt="Knowledge graph">
</p>

---

## 📊 Progress

| Difficulty | Solved |
|:-----------|:------:|
| 🟢 Easy    | 5 |
| 🟡 Medium  | 2 |
| 🔴 Hard    | 0 |
| **Total**  | **7** |

---

## 📚 Solutions

All solutions are in **JavaScript**. Click a problem to open its write-up.

| # | Problem | Difficulty | Topic | Language | Solution |
|:-:|---------|:----------:|-------|:--------:|----------|
| 1 | [Two Sum](solutions/0001-two-sum/) | 🟢 Easy | Arrays & Hashing | JavaScript | [`solution.js`](solutions/0001-two-sum/solution.js) |
| 49 | [Group Anagrams](solutions/0049-group-anagrams/) | 🟡 Medium | Arrays & Hashing | JavaScript | [`solution.js`](solutions/0049-group-anagrams/solution.js) |
| 121 | [Best Time to Buy and Sell Stock](solutions/0121-best-time-to-buy-and-sell-stock/) | 🟢 Easy | Sliding Window | JavaScript | [`solution.js`](solutions/0121-best-time-to-buy-and-sell-stock/solution.js) |
| 125 | [Valid Palindrome](solutions/0125-valid-palindrome/) | 🟢 Easy | Two Pointers | JavaScript | [`solution.js`](solutions/0125-valid-palindrome/solution.js) |
| 217 | [Contains Duplicate](solutions/0217-contains-duplicate/) | 🟢 Easy | Arrays & Hashing | JavaScript | [`solution.js`](solutions/0217-contains-duplicate/solution.js) |
| 242 | [Valid Anagram](solutions/0242-valid-anagram/) | 🟢 Easy | Arrays & Hashing | JavaScript | [`solution.js`](solutions/0242-valid-anagram/solution.js) |
| 347 | [Top K Frequent Elements](solutions/0347-top-k-frequent-elements/) | 🟡 Medium | Arrays & Hashing | JavaScript | [`solution.js`](solutions/0347-top-k-frequent-elements/solution.js) |

---

## 🗂️ Repository layout

```
leetcode/
├── README.md                        # this index
├── solutions/
│   ├── 0001-two-sum/
│   │   ├── README.md                # problem statement + approach + complexity
│   │   └── solution.js              # the solution (exports `Solution`)
│   ├── 0049-group-anagrams/
│   ├── 0121-best-time-to-buy-and-sell-stock/
│   ├── 0125-valid-palindrome/
│   ├── 0217-contains-duplicate/
│   ├── 0242-valid-anagram/
│   └── 0347-top-k-frequent-elements/
└── graphify-out/                    # auto-generated knowledge graph (see below)
```

**Naming convention:** each folder is `<zero-padded-leetcode-id>-<kebab-slug>`, e.g.
`0121-best-time-to-buy-and-sell-stock`. This keeps problems sorted by number and
easy to find.

---

## ▶️ Running a solution

Every `solution.js` exports the `Solution` class, so it runs under Node.js with no
setup:

```bash
node -e '
  const Solution = require("./solutions/0001-two-sum/solution.js");
  console.log(new Solution().twoSum([2, 7, 11, 15], 9)); // [0, 1]
'
```

Each problem's `README.md` includes a copy-paste example.

---

## ➕ Adding a new solution

1. Create `solutions/<id>-<slug>/` (pad the id to 4 digits).
2. Add `solution.js` exporting a `Solution` class, plus a `README.md` (copy an
   existing one as a template).
3. Add a row to the [Solutions](#-solutions) table and bump the
   [Progress](#-progress) counts.
4. Commit — the knowledge graph rebuilds itself (see below).

---

## 🕸️ Knowledge graph

This repo keeps a **knowledge graph** of the code under `graphify-out/`, generated
with [graphify](https://github.com/safishamsi/graphify). It maps every
`file → Solution → method`, so the structure of the repo can be read at a glance
instead of opening every file.

- 🌐 **`graphify-out/graph.html`** — interactive graph, open in a browser.
- 📄 **`graphify-out/GRAPH_REPORT.md`** — human-readable report (key nodes, communities).
- 🧠 **`graphify-out/graph.json`** — raw graph data for querying.

The graph **rebuilds automatically after every commit** via a git post-commit hook.
To refresh it manually:

```bash
graphify update .        # incremental, AST-only, no API cost
```

---

<p align="center"><i>One problem at a time.</i> 🚀</p>
