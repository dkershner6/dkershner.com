import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export type ThemeType = typeof DarkTheme;

const DarkTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark",
            primary: { main: "#b87333" },
            secondary: { main: "#EA0656" },
            info: { main: "#3f51b5" },
        },
    }),
);

export default DarkTheme;
