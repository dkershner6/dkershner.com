import React, { ReactElement, useContext } from "react";

import SunMoonIcon from "@mui/icons-material/Brightness4";
import {
    AppBar,
    Avatar,
    AvatarProps,
    Box,
    IconButton,
    Link,
    Toolbar,
    Tooltip,
} from "@mui/material";

import UIContext from "../../context/UIContext";

const avatarProps: AvatarProps = {
    sx: {
        backgroundColor: "#008800",
        color: "#fff",
    },
};

const Navigation = (): ReactElement => {
    const { themeType, setThemeType } = useContext(UIContext);

    return (
        <AppBar
            position="static"
            color={themeType === "light" ? "primary" : "transparent"}
        >
            <Toolbar>
                <Box flex="1"></Box>
                <Box display="flex" alignItems="center" color="#fff">
                    <Box
                        display="flex"
                        marginRight={(theme) => theme.spacing(1)}
                    >
                        <Tooltip title="Lighthouse Performance">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse Accessibility">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse Best Practices">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Lighthouse SEO">
                            <Link
                                href="https://developers.google.com/web/tools/lighthouse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Avatar {...avatarProps}>100</Avatar>
                            </Link>
                        </Tooltip>
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
