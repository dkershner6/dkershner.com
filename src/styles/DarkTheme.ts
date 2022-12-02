import { createTheme } from "@mui/material/styles";

export type ThemeType = typeof DarkTheme;

const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#1170D0" },
        secondary: { main: "#EA0656" },
        info: { main: "#3f51b5" },
    },
});

export default DarkTheme;
