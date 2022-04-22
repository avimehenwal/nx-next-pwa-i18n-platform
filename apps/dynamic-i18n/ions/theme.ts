import { createTheme, Theme } from '@mui/material/styles';

export const CUSTOM_THEME: Theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: '#ee4e65e6',
    },
    warning: {
      main: '#fd852e',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 15,
    h2: {
      fontSize: 30,
    },
  },
  components: {
    MuiCssBaseline: {},
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default CUSTOM_THEME;
