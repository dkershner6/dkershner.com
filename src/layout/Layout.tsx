import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

import { Box } from "@mui/material";

import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
    children: ReactNode;
}

type PageFormat = "print" | "printCover" | "printCombined" | "";

const Layout = (props: LayoutProps): ReactElement => {
    const { children } = props;
    const urlParams =
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search)
            : undefined;
    const format =
        urlParams === undefined ? "" : (urlParams.get("format") as PageFormat);

    return (
        <>
            <PageLayout format={format}>{children}</PageLayout>
        </>
    );
};

const PageLayout = (
    props: PropsWithChildren<{
        format: PageFormat;
    }>
): ReactElement => {
    const { format, children } = props;
    if (
        format === "print" ||
        format === "printCover" ||
        format === "printCombined"
    ) {
        return <div>{children}</div>;
    } else {
        return (
            <>
                <Navigation />
                <Box component="main" minHeight="calc(100vh - 56px)">
                    {children}
                </Box>
                <Footer />
            </>
        );
    }
};

export default Layout;
