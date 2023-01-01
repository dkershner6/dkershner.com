---
title: Building Microservices
description: This book is great for those coming from Monolithic architectures (pretty much everyone, originally) and baby-stepping through the reasons why you may want to move services to a more micro level. It is definitely written from a pro-microservices standpoint, but refrains from being preachy.
image: /img/books/building-microservices.png
tags:
    - good-first-read
    - books
    - Sam Newman
    - architecture
---

# Building Microservices

by Sam Newman

![Building Microservices](/img/books/building-microservices.png)

## TLDR

-   This book aims to provide the basics on how and why to split systems into contexts.
-   It is a solid introduction and does a great job in going deeper, discussing tradeoffs in all areas, including testing, deployment, and monitoring.
-   If you remember nothing else, remember "bounded contexts" and "seams".

## Why?

This book is great for those coming from Monolithic architectures (pretty much everyone, originally) and baby-stepping through the reasons why you may want to move services to a more micro level. It is definitely written from a pro-microservices standpoint, but refrains from being preachy.

## Who should read?

Generally the answer is everyone, but especially those more interested in the architecture career track. Monolithic architectures have fallen out of style for all but the simplest applications, and for good reason. If you are unsure what these reasons are, this is a good first step.

## Important Concepts

### Bounded Contexts and Seams

These are the bread and butter of microservices, and are almost solely responsible for if a microservice is going to succeed or fail miserably. Watch closely when these things are mentioned throughout the book, but here is a quick synopsis anyway:

Seams are the lines which are drawn being (micro)services, creating contexts. If the seam is in a good location, it creates a bounded context, which is loosely defined as a collection of concepts that heavily relate to one another. I usually see this referred to as "domain".

## Other Engineer Comments

> This book is great for developers who are new to the microservices concept, and also for any seasoned developer who is looking for any learning gaps.

> I read this book when the company I was working for wanted to split out our monolith application into microservices. The author of Building Microservices does a really nice job of explaining the basic principles on what microservices are, and what microservices are not. The author also does a really good job at explaining trade-offs and decision making the reader will most likely encounter when building microservices. I bought this book back in 2017 and it's still relevant in 2022.

> -TJ Walsh
