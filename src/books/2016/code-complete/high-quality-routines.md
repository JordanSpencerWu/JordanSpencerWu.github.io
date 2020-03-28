---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: High-Quality Routines
---

A routine is an individual method or procedure invokable for a single purpose. The routine is the greatest technique ever invented for saving space and improving performance. The single most important reason to create a routine is to reduce a program's complexity. One of the strongest mental blocks to creating routines is a reluctance to create a simple routine for a simple purpose.

Cohesion for routines refers to how closely the operation in a routine are related. The goal is to have each routine do one thing well and not do anything else. A good name for a routine clearly describes everything the routine does. A function is a routine that returns a value; a procedure is a routine that does not.