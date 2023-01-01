---
title: The DynamoDB Book
description: Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.
image: /img/books/dynamodb-book.png
tags:
    - learning
    - fundamentals
    - books
    - Alex DeBrie
    - design-patterns
    - score-5
    - engineering
---

# The DynamoDB Book

Supercharge your Data Modeling

by Alex DeBrie

![DynamoDB Book Cover](/img/books/dynamodb-book.png)

## TLDR

-   This book aims to help you data model for DynamoDB. This is a worthy adversary, your attention to detail up front is well-warranted.
-   The rules posited in this book are the impetus for the patterns behind our own models. The explanations are very detailed and easy to follow.
-   AWS-Famous Rick Houlihan approves, the godfather of hideous, but effective data modeling (yes, this book will feel gross at first).

## Why?

Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.

In addition, DynamoDB has some of its own quirks (things like Billing), and it talks about all of them in great detail.

One of my favorite parts of this book is when it talks about optimizations NOT being worth it, and to favor simplicity in these cases.

## Who should read?

This book is basically required reading for anyone working with DynamoDB. This book does the most comprehensive job of explaining it of any resource I have come in contact with.

## Important Concepts

### Make Naming and Usage of PK/SK 100% Consistent

This was probably the largest and most impactful takeaway from this book. Forget saving space, just create more fields and name them exactly the same every single time.

### Relationships in a Non-RDBMS

Relationships are managed in application code for key-value stores, but this book establishes patterns to help you create code to more firmly and obviously declare these in code.

## Other Engineer Comments

> The book covers all the core concepts of DynamoDB you'll need to know. The author introduces the reader to the fundamentals of Data Modeling, and how you would approach designing a single table database. For any dev coming from a RDMS background, this is where the biggest mental model shift comes in. Once the reader has a grasp on how to build out your Entities and Models then it's time for a more in-depth look at examples and strategies. The last few chapters of the book are dedicated to real life project examples. I found this extremely helpful to work through and reference previous chapters when something wasn't clear to me.
>
> -TJ Walsh
