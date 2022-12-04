import fs from "fs";
import path from "path";

import {
    AmplifyClient,
    UpdateAppCommand,
    UpdateAppCommandInput,
    CustomRule,
} from "@aws-sdk/client-amplify";

const getAmplifyAppId = (): string => {
    const teamProviderInfoBuffer = fs.readFileSync(
        path.join(process.cwd(), "amplify", "team-provider-info.json")
    );

    if (!teamProviderInfoBuffer) {
        throw new Error("Could not read amplify/team-provider-info.json");
    }

    const teamProviderInfo = JSON.parse(
        teamProviderInfoBuffer.toString("utf-8")
    ) as Record<string, { awscloudformation: { AmplifyAppId: string } }>;

    const teamProviderInfoEntries = Object.entries(teamProviderInfo);

    if (teamProviderInfoEntries.length === 0) {
        throw new Error("Could not find any Amplify apps");
    }

    return teamProviderInfoEntries?.[0]?.[1]?.awscloudformation?.AmplifyAppId;
};

const AMPLIFY_APP_ID = getAmplifyAppId();
const AMPLIFY_APP_REGION = "us-west-2";

const AMPLIFY_REDIRECTS: CustomRule[] = [
    {
        source: "https://www.dkershner.com",
        target: "https://dkershner.com",
        status: "302",
    },
];

const AMPLIFY_SETTINGS: UpdateAppCommandInput = {
    appId: AMPLIFY_APP_ID,
    customRules: AMPLIFY_REDIRECTS,
};

const setAmplifySettings = async (): Promise<void> => {
    const amplifyClient = new AmplifyClient({ region: AMPLIFY_APP_REGION });
    const updateAppCommand = new UpdateAppCommand(AMPLIFY_SETTINGS);
    const response = await amplifyClient.send(updateAppCommand);

    console.debug("Amplify Settings Have Been Set", response.app);
};

setAmplifySettings();
