import * as dynamo from '@aws-cdk/aws-dynamodb';
import * as ssm from '@aws-cdk/aws-ssm';
import * as cdk from '@aws-cdk/core';

export const DYNAMO_TABLE_ARN_SSM_PARAM = '/dkershner/dynamo/table/arn';
export const DYNAMO_TABLE_NAME_SSM_PARAM = '/dkershner/dynamo/table/name';
export const DYNAMO_TABLE_STREAM_ARN_SSM_PARAM =
    '/dkershner/dynamo/table/stream/arn';

export default class DKershnerDynamoStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.createDynamoTable();
    }

    private createDynamoTable = (): dynamo.CfnGlobalTable => {
        const globalTable = new dynamo.CfnGlobalTable(this, 'DKershnerTable', {
            tableName: 'dkershner',
            keySchema: [
                {
                    attributeName: 'pk',
                    keyType: 'HASH'
                },
                {
                    attributeName: 'sk',
                    keyType: 'RANGE'
                }
            ],
            attributeDefinitions: [
                {
                    attributeName: 'pk',
                    attributeType: dynamo.AttributeType.STRING
                },
                {
                    attributeName: 'sk',
                    attributeType: dynamo.AttributeType.STRING
                }
            ],
            timeToLiveSpecification: {
                enabled: true,
                attributeName: 'expiresAt'
            },
            replicas: [
                {
                    region: this.region
                }
            ],
            billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
            streamSpecification: {
                streamViewType: 'NEW_AND_OLD_IMAGES'
            }
        });

        globalTable.applyRemovalPolicy(cdk.RemovalPolicy.RETAIN);

        new ssm.StringParameter(this, 'DKershnerDynamoTableArnSSM', {
            parameterName: DYNAMO_TABLE_ARN_SSM_PARAM,
            stringValue: globalTable.attrArn
        });

        if (!globalTable.tableName) {
            throw new Error('Somehow a table has no tableName');
        }

        new ssm.StringParameter(this, 'DKershnerDynamoTableNameSSM', {
            parameterName: DYNAMO_TABLE_NAME_SSM_PARAM,
            stringValue: globalTable.tableName
        });

        new ssm.StringParameter(this, 'DKershnerDynamoTableStreamArnSSM', {
            parameterName: DYNAMO_TABLE_STREAM_ARN_SSM_PARAM,
            stringValue: globalTable.attrStreamArn
        });

        return globalTable;
    };
}
