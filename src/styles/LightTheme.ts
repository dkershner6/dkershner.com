import { createMuiTheme } from '@material-ui/core/styles';

export type ThemeType = typeof LightTheme;

const LightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: { main: '#1170D0' },
        secondary: { main: '#EA0656' },
        info: { main: '#3f51b5' }
    }
});

export default LightTheme;
