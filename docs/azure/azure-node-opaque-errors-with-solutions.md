---
description: Azure related node packages and the un-understandable errors that come along with them.
title: Azure Node Opaque Errors with Solutions
tags:
    - azure
    - cloud
    - node
---

# Azure Node Opaque Errors with Solutions

Often times as a programmer, you are faced with errors that's messaging indicates next to nothing about anything. Here is a list of some that have been encountered related to Azure.

## Azure Storage Libraries - Expected signal to be an instanceof AbortSignal

https://github.com/node-fetch/node-fetch/issues/784

This has to do with Azure using an outdated version of `node-fetch`. The solution is a little varied, but involves disabling pieces of minification of code. It is VERY possible this bug only affects production for this reason.
