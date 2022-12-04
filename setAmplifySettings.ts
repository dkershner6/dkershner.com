import fs from "fs";
import path from "path";

import {
    AmplifyClient,
    UpdateAppCommand,
    UpdateAppCommandInput,
    CustomRule,
} from "@aws-sdk/client-amplify";
import Chalk from "chalk";

// #region ############### CONFIGURATION ###############
/** Overwrite this to the actual appId to skip lookup (troubleshooting) */
const AMPLIFY_APP_ID = undefined;

const AMPLIFY_APP_REGION = "us-west-2";

/**
 * Allow you to redirect from one domain or path to another.
 */
const AMPLIFY_REDIRECTS: CustomRule[] = [
    {
        source: "https://www.dkershner.com",
        target: "https://dkershner.com",
        status: "302",
    },
];

/**
 * Make sure any settings included here are complete, or else it will overwrite.
 * Not including a setting will not remove it, however.
 */
const AMPLIFY_SETTINGS: Omit<UpdateAppCommandInput, "appId"> = {
    customRules: AMPLIFY_REDIRECTS,
};
// #endregion ############### CONFIGURATION ###############

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

const setAmplifySettings = async (): Promise<void> => {
    const amplifyClient = new AmplifyClient({ region: AMPLIFY_APP_REGION });
    const updateInput: UpdateAppCommandInput = {
        appId: AMPLIFY_APP_ID ?? getAmplifyAppId(),
        ...AMPLIFY_SETTINGS,
    };
    const updateAppCommand = new UpdateAppCommand(updateInput);
    const response = await amplifyClient.send(updateAppCommand);

    console.debug(
        Chalk.bgGreenBright("Amplify Settings Have Been Set"),
        Object.fromEntries(
            Object.entries(response?.app ?? {}).filter(([key]) =>
                Object.keys(updateInput).includes(key)
            )
        )
    );
};

setAmplifySettings();
