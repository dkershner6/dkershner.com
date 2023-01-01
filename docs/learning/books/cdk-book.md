---
title: The CDK Book
description: The CDK is a massive timesaver over raw Cloudformation, but even with helpful constructs in place, it takes some getting used to. Reading this book, while taking a few hours, will likely save you more than a few days over the course of time.
image: /img/books/cdk-book.png
tags:
    - fundamentals
    - books
    - Matthew Bonig, Thorsten Höger, Sathyajith Bhat, Matt Coulter
    - architecture
    - aws
    - infrastructure
    - infrastructure-as-code
    - short
---

# The CDK Book

by Matthew Bonig, Thorsten Höger, Sathyajith Bhat, Matt Coulter

![CDK Book](/img/books/cdk-book.png)

## TLDR

-   This book has an ambitious goal, being the answer to the CDK that the DynamoDB Book was to Dynamo. It does not achieve it. That being said, it's still the best (only) book on the topic, and is therefore worth reading.
-   This book is a very quick read because it has so many code examples. This is even with the fact that some topics (like setting up VSCode for ESLint) are way overexplained.
-   When you scrape away some of the shortcomings, this book does a pretty decent job at presenting the fundamentals and the "why" of the AWS CDK in a fairly concise manner.

## Why?

The CDK is a massive timesaver over raw Cloudformation, but even with helpful constructs in place, it takes some getting used to. Reading this book, while taking a few hours, will likely save you more than a few days over the course of time.

## Who should read?

This is required reading for the architect path (until I find a better resource). Everyone else should probably at least skim or read the first several chapters, as it is a solid bang for buck investment in knowledge you are highly likely to need.

## Important Concepts

-   Basics: App, Stack, L0,1,2,3 Constructs are all covered very well, and this section is very helpful to a newcomer (I assume).
-   This book harps on determinism (basically having hardcoded items where possible), and has changed the way we do some core items, like lookup from SSM. Very helpful to pay close attention to that section.
-   This book covers testing in a major way. I am still not entirely sure what to do surrounding this topic, as much of it seems like Snapshot testing, which I find little value in.
-   Of note: he disagrees with (or has quibbles about) my typical branching strategy. I have taken his criticisms into account, and we are likely to employ artifacts to cover the downsides.
-   Not talking about the cdk.x functions seems like a glaring omission. `cdk.Lazy` and `cdk.Fn.Join/Split` have saved my life more than once.
