import React, { ReactElement } from "react";

import { AppBar, Box } from "@mui/material";

import packageJson from "../../../package.json";

const COPYRIGHT = <>&copy;</>;
export const COPYRIGHT_COMPANY_NAME = "Kershner Endeavors LLC";

const Footer = (): ReactElement => {
    return (
        <AppBar component="footer" position="static" color="default">
            <Box display="flex">
                <Box flex="1" padding={(theme) => theme.spacing(1)}>
                    {COPYRIGHT} {new Date().getFullYear()}{" "}
                    {COPYRIGHT_COMPANY_NAME}
                </Box>
                <Box padding={(theme) => theme.spacing(1)}>
                    v{packageJson.version}
                </Box>
            </Box>
        </AppBar>
    );
};

export default Footer;
