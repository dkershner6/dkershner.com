import React, { ReactElement, useContext } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";

import UIContext from "../../context/UIContext";

const Navigation = (): ReactElement => {
    const theme = useTheme();
    const { themeType, setThemeType } = useContext(UIContext);

    return (
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <Box flex="1">
                    <Typography variant="h6">
                        {process.env.NEXT_PUBLIC_BASE_TITLE ??
                            "Kershner Endeavors"}
                    </Typography>
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
