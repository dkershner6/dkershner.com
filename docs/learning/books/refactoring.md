---
title: Refactoring
description: Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.
image: /img/books/refactoring.png
tags:
    - learning
    - good-first-read
    - fundamentals
    - books
    - Martin Fowler
    - code-quality
    - score-5
    - engineering
---

# Refactoring

by Martin Fowler, with Kent Beck

![Refactoring Cover](/img/books/refactoring.png)

## TLDR

-   This book aims to help you produce code that easier to understand (by humans)
-   It uses JavaScript for its examples, as opposed to most books that use Java.
-   It does a fantastic job of explaining both the why and how of each pattern, and the list is very comprehensive.

## Why?

This book correctly identifies code smells and which pattern to implement for each. Following the advice will undoubtably lift your code quality, improving the lives of you and your fellow developers. It also discusses unit testing, and how correctly organized code vastly simplifies the process of Test Driven Development.

## Who should read?

This book is fantastic for all Software Engineers, period. It is a great replacement for the older "Clean Code" book, and has both updated the patterns and use cases, but also the examples to use JavaScript rather than Java, which has obvious advantages for TypeScript devs.

## Important Concepts

### Code Smells

These are when you look at code, and you know something is not right. The book has seventy refactorings, and code smells to go along with each. It can be used in somewhat "handbook" fashion, but eventually this will become very natural to you and your results will speed up significantly.

### Test Driven Development

We all have heard, and know, we should be using unit tests, and that we should probably be using test-driven development. There are exceptions for things like prototyping, but generally any application of significant size that is in production benefits greatly.

This book takes away all excuses for not using TDD, and provides strategies that feel so natural, you will be essentially getting unit tests for free. It takes some initial discipline and willpower, but in my opinion, the results are well worth it.

## Other Engineer Comments

> I absolutely loved learning from Refactoring. There are clear and easy to grasp concepts that will lead you to write more quality code that your future self and your team will appreciate. Methods of refactoring will leave you with more reusabality, confidence that you have covered your edge cases, meaning that your code will be less prone to bugs, and it will be easier to work with as an application grows or requirements change.
>
> -Greg Weber
