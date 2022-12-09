import React, {
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from "react";

import { ThemeProvider } from "@mui/material";

import { useColorMode } from "@docusaurus/theme-common";
import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const createEmotionCache = () => {
    return createCache({ key: "css" });
};

const ThemeProviders = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    const { colorMode } = useColorMode();
    const [paletteMode, setPaletteMode] = useState("light");

    useLayoutEffect(() => {
        if (paletteMode !== colorMode) {
            setPaletteMode(colorMode);
        }
    }, [colorMode, paletteMode]);

    const theme = useMemo(
        () => (paletteMode === "dark" ? DarkTheme : LightTheme),
        [paletteMode]
    );

    return (
        <CacheProvider value={createEmotionCache()}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CacheProvider>
    );
};

export default ThemeProviders;
