import React, { ReactElement, ReactNode, useContext } from "react";

import { ThemeProvider } from "@mui/material";

import UIContext from "../context/UIContext";

const ThemeProviders = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    const { theme } = useContext(UIContext);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
