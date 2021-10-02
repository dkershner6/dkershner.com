#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import DKershnerDynamoStack from '../lib/DKershnerDynamoStack';

const app = new cdk.App();

new DKershnerDynamoStack(app, 'DKershnerDynamoStack', {
    env: { region: 'us-west-2' }
});
