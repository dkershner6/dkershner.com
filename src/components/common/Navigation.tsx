import React, { ReactElement, useContext } from "react";

import SunMoonIcon from "@mui/icons-material/Brightness4";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";

import UIContext from "../../context/UIContext";

const Navigation = (): ReactElement => {
    const { themeType, setThemeType } = useContext(UIContext);

    return (
        <AppBar
            position="static"
            color={themeType === "light" ? "primary" : "transparent"}
        >
            <Toolbar>
                <Box flex="1">
                    <Typography variant="h6">
                        {process.env.NEXT_PUBLIC_BASE_TITLE ??
                            "Kershner Endeavors"}
                    </Typography>
                </Box>

                <Tooltip title="Light/Dark Mode">
                    <IconButton
                        onClick={() =>
                            setThemeType((prevThemeType) =>
                                prevThemeType === "light" ? "dark" : "light"
                            )
                        }
                        aria-label="Toggle Light/Dark Mode"
                    >
                        <SunMoonIcon htmlColor="#fff" />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
