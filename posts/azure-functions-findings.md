---
author: Derek Kershner
date: 2022-12-03
description: Findings from experience using Azure Functions.
title: Azure Functions Findings
---

## Findings from experience using Azure Functions

-   Always set WEBSITE_RUN_FROM_PACKAGE to 1. Without this, the function app constantly fails and takes forever to deploy.
