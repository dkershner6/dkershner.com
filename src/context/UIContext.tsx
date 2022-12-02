import React, {
    createContext,
    ReactElement,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { PaletteMode, Theme } from "@mui/material";

import DarkTheme from "../styles/DarkTheme";
import LightTheme from "../styles/LightTheme";

export interface UIContextOutput {
    themeType: PaletteMode;
    setThemeType: React.Dispatch<React.SetStateAction<PaletteMode>>;
    theme: Theme;
}

const UIContext = createContext<UIContextOutput>(
    undefined as unknown as UIContextOutput
);

const THEME_TYPE_STORAGE_KEY = "dkershner-theme-type";

export const UIContextProvider = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    const initialStorageCheckComplete = useRef(false);
    const [themeType, setThemeType] = useState<PaletteMode>("light");

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!initialStorageCheckComplete.current) {
                const themeTypefromStorage = localStorage.getItem(
                    THEME_TYPE_STORAGE_KEY
                );

                if (themeTypefromStorage) {
                    setThemeType(themeTypefromStorage as PaletteMode);
                }
                initialStorageCheckComplete.current = true;
                return;
            }
            localStorage.setItem(THEME_TYPE_STORAGE_KEY, themeType);
        }
    }, [themeType]);

    const theme = useMemo(
        () => (themeType === "light" ? LightTheme : DarkTheme),
        [themeType]
    );

    return (
        <UIContext.Provider value={{ themeType, setThemeType, theme }}>
            {children}
        </UIContext.Provider>
    );
};

export default UIContext;
