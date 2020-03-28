---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Refactoring
---

Software evolution is like biological evolution in that some mutations are beneficial evolution and many mutation are not. The key distinction between kinds of software evolution is whether the program's quality improves or degrades under modification. A second distinction is the one between changes made during construction and those made during maintenance.

The Cardinal Rule of Software Evolution is that evolution should improve the internal quality of the program. When you have to make change, strive to improve the code so that future changes are easier. The key strategy is refactoring, "a change made to the internal structure of the software to make it easier to understand and cheaper to modify without changing its observable behavior."