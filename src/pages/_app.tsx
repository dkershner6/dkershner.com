import { Session } from "inspector";

import React, { useEffect, ReactElement } from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { initialize, pageview } from "react-ga";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeProviders from "../components/ThemeProviders";
import { UIContextProvider } from "../context/UIContext";
import createEmotionCache from "../lib/common/createEmotionCache";

import { siteMetadata } from "./_document";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    pageProps: {
        session: Session;
        dehydratedState?: string;
    };
}

const MyApp = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: MyAppProps): ReactElement => {
    useEffect(() => {
        initialize("UA-10014066-1");
        pageview(window.location.pathname + window.location.search);
    }, []);

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title data-testid="pageTitle">{siteMetadata.title}</title>
            </Head>
            <CacheProvider value={emotionCache}>
                <QueryClientProvider client={new QueryClient()}>
                    <UIContextProvider>
                        <ThemeProviders>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProviders>
                    </UIContextProvider>
                </QueryClientProvider>
            </CacheProvider>
        </>
    );
};

export default MyApp;
