#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import DKershnerDynamoStack from '../lib/DKershnerDynamoStack';
import DKershnerAmplifyStack from '../lib/DKershnerAmplifyStack';

const app = new cdk.App();

const dynamoStack = new DKershnerDynamoStack(app, 'DKershnerDynamoStack', {
    env: { region: 'us-west-2' }
});

const amplifyStack = new DKershnerAmplifyStack(app, 'DKershnerAmplifyStack', {
    env: { region: 'us-west-2' }
});
amplifyStack.addDependency(dynamoStack);
