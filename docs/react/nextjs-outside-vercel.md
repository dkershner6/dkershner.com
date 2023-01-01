---
title: Deploying Next.js Outside of Vercel
description: The current state of affairs for deploying Next.js outside of Vercel.
tags:
    - frontend
    - nextjs
    - react
---

# Deploying Next.js Outside of Vercel

This is meant as a reference document for the current state of affairs for deploying Next.js outside of Vercel. There are opinions present, but they are not meant to be taken as the only way to do things, just the experience of the author with doing so.

## Current Recommendation

[SST NextjsSite](https://docs.sst.dev/constructs/NextjsSite)

There are downsides to this structure, including that it is based on the now abandoned serverless components plugin, but it is still the best available option for deploying Next.js outside of Vercel for the time being.

-   But this doesn't support Next.js 12 or 13 features!
    -   Correct, I recommend waiting on using these features. Alternatives are coming, but are not yet available.
-   But why not [insert other framework here]?
    -   See sections below which cover each other option.

## Why not Vercel?

This is a fair question. For most sites, Vercel is a very simple, bulletproof way to deploy a Next.js site. It is also free for most use cases. However, there are some reasons you might want to deploy outside of Vercel:

1. You use over 1TB of bandwidth. Pricing for Vercel jumps quite severely after this point, enterprise plans tend to start in the $2,000/month range, or pay as you go bandwidth is significantly more than other options.
2. You are using infrastructure as code. Vercel doesn't fit all that well into this scenario, although doing so is certainly possible.

## Why not Remix or [insert other framework here]?

For my money, this answer is all about incremental static regeneration, a form of stale-while-revalidate for frontends that allows a user to always get a static page for the absolute highest possible performance, while still getting the latest data from the backend. This is a huge win for performance, and is the main reason I use Next.js. You can read more about this in the [Next.js docs](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration).

## Serverless Framework (Components)

https://www.serverless.com/plugins/serverless-nextjs-plugin

SST is based on this implementation, and allows you to use the CDK instead of Serverless Framework, which is a huge win for no downside.

## AWS Amplify

https://docs.amplify.aws/start/q/integration/next

AWS is the first out of the gate to implement using the standalone functionality provided by Next.js. This is great, but there are some major downsides that you should know about:

-   Incremental Static Regeneration is not REALLY supported. Currently, it loads synchronously and blocks the user experience while it does, effectively making it the exact same as SSR. This alone is reason enough to avoid this option, but it may be resolved if Cloudfront releases stale-while-revalidate support.
-   Amplify does not play nice with the CDK. I have tried everything to make it do so, but it is simply impossible to do well. Amplify's CDK construct is beyond useless, and integrating the opposite direction using a portal-created Amplify is possible, more pleasant, but leaves much to be desired in terms of environment variables and redirects.
-   Amplify's pricing **seems** comparable to using Cloudfront, Lambdas, and S3, but if you look closely at the lambda GB/s pricing, it is MAGNITUDES more expensive.

## Azure Static Web Apps

https://docs.microsoft.com/en-us/azure/static-web-apps/

This is a great option, but it is not yet available for Next.js. It is currently in preview, and is expected to be released in the next few months. It is (probably) based on the standalone functionality provided by Next.js, and is a great option for those who are already using Azure.

-   FWIW, I have ran into major sizing issues with regards to this option and the 100MB limit. Even an extremely simple website trips it, and there is no real visibility as to why. Perhaps this gets resolves in general availability, but it is a major issue for me.
