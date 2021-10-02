import * as sst from "@serverless-stack/resources";
import * as dynamo from "@aws-cdk/aws-dynamodb";
import * as ssm from "@aws-cdk/aws-ssm";
import * as acm from "@aws-cdk/aws-certificatemanager";

export const DYNAMO_TABLE_ARN_SSM_PARAM = "/dkershner/dynamo/table/arn";
export const DKERSHNER_CERT_ARN =
    "arn:aws:acm:us-east-1:506806471935:certificate/19cb76b4-33e7-4d76-9379-25a176a22092";

export default class MyStack extends sst.Stack {
    private readonly table: dynamo.ITable;

    constructor(scope: sst.App, id: string, props?: sst.StackProps) {
        super(scope, id, props);

        this.table = this.findDynamoTable();

        this.createNextJsSite();
    }

    private findDynamoTable = (): dynamo.ITable => {
        const dynamoArn = ssm.StringParameter.valueForStringParameter(
            this,
            DYNAMO_TABLE_ARN_SSM_PARAM
        );

        return dynamo.Table.fromTableArn(
            this,
            "DKershnerDynamoTable",
            dynamoArn
        );
    };

    private createNextJsSite = (): sst.NextjsSite => {
        const site = new sst.NextjsSite(this, "Site", {
            path: "frontend",
            environment: {
                DYNAMO_TABLE_NAME: this.table.tableName,
            },
            customDomain: {
                isExternalDomain: true,
                domainName: "dkershner.com",
                certificate: acm.Certificate.fromCertificateArn(
                    this,
                    "DKershnerCert",
                    `arn:aws:acm:us-east-1:${this.account}:certificate/19cb76b4-33e7-4d76-9379-25a176a22092`
                ),
            },
        });

        // @ts-expect-error - I think this will work, even though it has an error
        site.attachPermissions([[this.table, "grantReadWriteData"]]);

        this.addOutputs({
            url: site.url,
        });

        return site;
    };
}
