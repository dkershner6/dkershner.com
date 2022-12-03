import React, { ReactElement, useContext } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    AppBar,
    Box,
    Hidden,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import UIContext from "../../context/UIContext";

import NavigationMenu from "./NavigationMenu";

const Navigation = (): ReactElement => {
    const theme = useTheme();
    const { themeType, setThemeType } = useContext(UIContext);

    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    const renderCompanyTitle = (): ReactElement | null => {
        if (isSm) {
            return null;
        }

        return (
            <Box>
                <Typography variant="h6">
                    {process.env.NEXT_PUBLIC_BASE_TITLE ?? "Kershner Endeavors"}
                </Typography>
            </Box>
        );
    };

    return (
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                {renderCompanyTitle()}
                <Box
                    display="flex"
                    flex="1"
                    justifyContent={isSm ? "flex-start" : "center"}
                >
                    <NavigationMenu />
                </Box>
                <Box>
                    <Tooltip
                        title={
                            themeType === "light" ? "Dark Mode" : "Light Mode"
                        }
                    >
                        <IconButton
                            onClick={() =>
                                setThemeType((prevThemeType) =>
                                    prevThemeType === "light" ? "dark" : "light"
                                )
                            }
                            aria-label="Toggle Light/Dark Mode"
                        >
                            {themeType === "light" ? (
                                <DarkModeIcon
                                    htmlColor={
                                        theme.palette.primary.contrastText
                                    }
                                />
                            ) : (
                                <LightModeIcon />
                            )}
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
