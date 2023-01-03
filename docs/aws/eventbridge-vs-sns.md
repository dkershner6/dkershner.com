---
description: Two services with different implementations of a similar purpose.
title: "Fan-out: Eventbridge vs SNS"
tags:
    - aws
    - cloud
    - eventbridge
    - events
    - sns
---

# Fan-out: Eventbridge vs SNS

## TLDR

Eventbridge is more convenient in several ways, SNS will scale far, far higher.

## Definitions

For any fan-out system, you have two main components, the pub (the thing you publish into), and the sub (the things that subscribe to the pub).

For the purposes of this article, we will be contorting the typical view of pieces of infrastructure to more accurately define limits of the services, but here is a quick glossary, with a how and why:

### Eventbridge

Event bus: This is the train station, and is technically the thing you publish into, but we will not be defining it as the pub or the sub, since you typically have only one event bus for many different types of events, and it is agnostic to the event type.

Rule: This is what we will be using for our **pub**. It techincally is more of a router, but is close enough, and limit-wise, it fits perfectly.

Rule Target: This is our **sub**. It is the thing that receives the event.

### SNS

Topic: This is our **pub**. It is what you toss events at.

Subscription: This is our **sub**. It is the thing that receives the event.

SNS is a more traditional system, so definitions match up more closely.

## Ease of Use

Eventbridge wins here, hands down. You just set up an event bus, and then you can create rules that route events to targets, FOREVER, without ever deploying again.

With SNS, you must create a new topic for each event type, deploy it, then you can start subscribing. This may not sound difficult, but the work can be significant given enough event types (hundreds, thousands...hundreds of thousands?). In a centralized event system, you must also ensure that you deploy the topic for every event before you start publishing them. This is harder to remember than it sounds.

## Integration

This is Eventbridge's biggest selling point. It integrates with everything, including things outside of AWS. We will not be focusing much here, however, since we are comparing specifically the concept of fan-out of our own events, and you can always use both Eventbridge for its integrations, and SNS for fan-out at the same time.

## Scale

SNS by miles.

Eventbridge can have 300 rules per event bus and 5 targets per rule. This means that you can theoretically have 1500 targets per event bus, but the more limiting factor is only having 300 different event types. Perhaps for smaller use cases, this doesn't matter, but for larger ones, it is a significant limitation. This is a soft limit, but even at 1500 rules, you are still very limited.

SNS can have 100,000 topics per account, and 12.5M subscriptions per topic. For all practical purposes, this is effectively unlimited. SNS can also handle more events published per second, but this is not a concern for most use cases.

## Cost

The cost structure is different between the two solutions, but the end cost ends up being close to one another. For Eventbridge, you pay more on the publish, but less on the subscription send. At max rule targets, Eventbridge is probably cheaper, but for most use cases, SNS is probably cheaper or the difference is negligible.

## Conclusion

Eventbridge is a great service, but it is not a replacement for SNS. If you are able to accurately define your scope up front, and Eventbridge's limits are sufficient, then it is a great choice. If you are not able to accurately define your scope up front, or you need to scale beyond Eventbridge's limits, then SNS is the way to go.

Don't forget that you can also use both services together, and Eventbridge can be used for its integrations, and SNS for fan-out.
