---
description: Tips while using Azure Functions (Learned the hard way).
title: Azure Functions Tips & Tricks
tags:
    - azure
    - cloud
    - serverless
    - functions
---

# Azure Functions Tips & Tricks (Learned the hard way)

-   Always set WEBSITE_RUN_FROM_PACKAGE to 1 (in Application Settings / Environment Variables). Without this, the function app constantly fails and takes forever to deploy (~30min vs ~3min).
    -   [Azure recommends this](https://learn.microsoft.com/en-us/azure/azure-functions/run-functions-from-deployment-package), but it isn't obvious unless you happen upon those docs.
-   When using Node, all functions must be in the root in order to run locally. This means no monorepos or any form of organization when using Functions.
-   In order to run locally when using queue-triggered functions, you must have a local storage emulator running. The simplest method is to install azurite globally `npm i -g azurite`, then just simply run `azurite`.
    -   You can also install the VSCode function by the same name, which is also pretty simple to use.
-   If you get odd eslint or prettier behavior when using the Azure extensions to generate code, try changing the line endings from CRLF to LF.
