import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export type ThemeType = typeof LightTheme;

const LightTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            primary: { main: "#1170D0" },
            secondary: { main: "#EA0656" },
            info: { main: "#3f51b5" },
        },
    })
);

export default LightTheme;
