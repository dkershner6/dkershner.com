import React, { ReactElement } from "react";

import { AppBar, Box, Toolbar } from "@mui/material";

import packageJson from "../../package.json";

const COPYRIGHT = <>&copy;</>;
export const COPYRIGHT_COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME;

const Footer = (): ReactElement => {
    return (
        <AppBar component="footer" position="static" color="default">
            <Toolbar>
                <Box flex="1" padding={(theme) => theme.spacing(1)}>
                    {COPYRIGHT} {new Date().getFullYear()}{" "}
                    {COPYRIGHT_COMPANY_NAME}
                </Box>
                <Box padding={(theme) => theme.spacing(1)}>
                    v{packageJson.version}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
