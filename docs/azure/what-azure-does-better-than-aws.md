---
description: There are a few really bright spots in Azure to know about, and take full advantage of.
title: What Azure does better than AWS
tags:
    - azure
    - cloud
---

# Azure CosmosDB (vs DynamoDB)

This one is not cut and dry, just to be clear, but I believe CosmosDB to have chosen better tradeoffs than DynamoDB in general, but will try to present both sides.

## CosmosDB Advantages

-   Indexing is implemented in an opt-out fashion, allowing you significantly more flexibility up front, and then allowing you to optimize for performance later. This is much more intuitive than the opposite (as is so in DynamoDB). **It is hard to overstate how powerful this single advantage is, but DynamoDB has [entire books](/resources/learning/books/dynamodb-book) written about how to best not screw this part up that simply aren't needed with CosmosDB.**
-   Indexing is possible on array values.
-   Massive up front data modeling savings because only one partition key needs to ever be chosen.

## DynamoDB Advantages

-   Very clear pricing.
-   Very low level control.
-   Transactions (across partitions and even tables).

**TLDR: This one is close, and up for argument, but for MOST people with MOST workloads, I think CosmosDB serves the need better.**

# Azure SQL (vs Aurora)

This one is also not cut and dry, and perhaps you could make an argument that a MySQL RDS is a better comparison, and likely Aurora outstrips Azure SQL somewhere at the extreme high end, but...hear me out.

## Why Aurora and not RDS?

-   Azure SQL is not only their cloud database, it also provides replication locally, regionally, globally, like Aurora does (and RDS does not).

## Why Azure SQL over Aurora?

-   Ease of use (not even close).
-   Very cheap on the low end ($5/mo).
-   Very simple pricing (no need to worry about I/O transactions). In addition, I would argue that at all levels it is cheaper.
-   More flexible provisioning (~3 models to go with).

Those are not small advantages, and I would argue that there are only a few arguments that can be made for Aurora:

-   Faster scaling for serverless? I haven't had any issues with Azure SQL myself, but this is a possibility.
-   You have to use SQL Server? I guess that could be a con, though Azure does do postgres in some of the provisioning schemes.
-   Higher scaling ceiling? This might be true, although I am not sure I will ever be able to create something that would know...and if I did, I probably wouldn't use SQL anyway...

**TLDR: It's easier and cheaper. Like, much easier.**

# Azure Storage v1 Queues (vs SQS)

> General-purpose v1 storage accounts enable access to block blobs, page blobs, files, queues, and tables, offering low transaction prices but with higher storage prices. General-purpose v1 accounts do not provide access to Cool or Archive storage.
>
> https://azure.microsoft.com/en-us/pricing/details/storage/blobs/#pricing (currently called "Other")

Higher storage, but lower transaction costs? For some forms of storage, this makes a ton of sense.

The pricing is super simple: $0.00036 for 10,000 anythings (read, write, or delete). This is $0.036 per million.

One absolute perfect fit is Queue storage, where things are stored for very short periods of time, and the item generally experiences one write, and one read.

Compare this to SQS at $0.40 per million api calls. Granted, SQS allows batching of 10, but even on it's very best day where you get 10 messages every single call, Azure is still a bit cheaper, and that day will never actually happen anyway.

**TLDR: Azure Storage Queue v1 is ~1/10th the cost of AWS SQS**

# Azure Table Storage (vs...Nothing)

This operates on the same pricing scheme as above. Not too much to write home about here, as it is essentially just a very, very simple key-value store.

But, if your workload can fit into a very simple indexing structure, AWS simply has no equivalent, period. DynamoDB is closest and it is many magnitudes more expensive (~25x).

**TLDR: Unique offering!**

# Conclusion

OK, so this is a pretty tiny list, I admit. AWS is still the clear winner in aggregate, but I just wanted to weigh in on my comparative experiences, and where I sometimes get surprised. :)
