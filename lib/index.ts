import { App } from "@serverless-stack/resources";
import WebAppStack from "./WebAppStack";

export default function main(app: App): void {
    app.setDefaultFunctionProps({
        runtime: "nodejs14.x",
    });

    new WebAppStack(app, "DKershnercomWebAppStack");
}
