import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export type ThemeType = typeof LightTheme;

const LightTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            primary: { main: "#b87333" },
            secondary: { main: "#EA0656" },
            info: { main: "#3f51b5" },
            background: {
                default: "#eee",
            },
        },
    }),
);

export default LightTheme;
