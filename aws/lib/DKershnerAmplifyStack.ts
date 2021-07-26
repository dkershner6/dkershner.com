import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify';
import * as codebuild from '@aws-cdk/aws-codebuild';
import * as iam from '@aws-cdk/aws-iam';
import * as dynamo from '@aws-cdk/aws-dynamodb';
import * as ssm from '@aws-cdk/aws-ssm';
import { DYNAMO_TABLE_ARN_SSM_PARAM } from './DKershnerDynamoStack';
import { GitHubSourceCredentials } from '@aws-cdk/aws-codebuild';
import { GitHubSourceCodeProvider } from '@aws-cdk/aws-amplify';

export default class DKershnerAmplifyStack extends cdk.Stack {
    dynamoTable: dynamo.ITable;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.dynamoTable = this.findDynamoTable();

        this.createDKershnerAmplify();
    }

    private findDynamoTable = (): dynamo.ITable => {
        const dynamoArn = ssm.StringParameter.valueForStringParameter(
            this,
            DYNAMO_TABLE_ARN_SSM_PARAM
        );

        return dynamo.Table.fromTableArn(
            this,
            'DKershnerDynamoTable',
            dynamoArn
        );
    };

    private createDKershnerAmplify = (): amplify.App => {
        const amplifyExecutionUser = new iam.User(
            this,
            'DKershnerExecutionUser'
        );
        this.dynamoTable.grantReadWriteData(amplifyExecutionUser);

        const executionKey = new iam.CfnAccessKey(
            this,
            'AmplifyExecutionUserKey',
            {
                userName: amplifyExecutionUser.userName
            }
        );

        const dkershnerAmplifyRole = new iam.Role(
            this,
            'DKershnerAmplifyRole',
            {
                assumedBy: new iam.ServicePrincipal('amplify.amazonaws.com'),
                managedPolicies: [
                    iam.ManagedPolicy.fromAwsManagedPolicyName(
                        'AdministratorAccess'
                    )
                ]
            }
        );

        const dkershnerAmplify = new amplify.App(this, 'DKershnerAmplifyApp', {
            role: dkershnerAmplifyRole,
            sourceCodeProvider: new GitHubSourceCodeProvider({
                owner: 'dkershner6',
                repository: 'dkershner.com',
                // Dont want to pay for secrets manager - fill in manually, dont commit
                oauthToken: cdk.SecretValue.plainText(
                    process.env.LOCAL_TOKEN ?? ''
                )
            }),
            environmentVariables: {
                _LIVE_UPDATES:
                    '[{"pkg":"@aws-amplify/cli","type":"npm","version":"latest"}]',
                KEY_ID: executionKey.ref,
                SECRET_KEY: executionKey.attrSecretAccessKey,
                DYNAMO_TABLE_NAME: this.dynamoTable.tableName
            },
            buildSpec: codebuild.BuildSpec.fromObjectToYaml({
                version: '1.0',
                frontend: {
                    phases: {
                        preBuild: {
                            commands: ['npm ci']
                        },
                        build: {
                            commands: ['npm run build']
                        }
                    },
                    artifacts: {
                        baseDirectory: '.next',
                        files: '**/*'
                    },
                    cache: {
                        paths: ['node_modules/**/*']
                    }
                }
            }),
            customRules: [
                {
                    source: `https://www.dkershner.com`,
                    target: `https://dkershner.com`,
                    status: amplify.RedirectStatus.REWRITE
                }
            ]
        });

        dkershnerAmplify.addBranch('main', {});

        dkershnerAmplify.addBranch('develop', {});

        return dkershnerAmplify;
    };
}
