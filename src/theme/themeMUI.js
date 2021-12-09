import { createTheme } from '@mui/material';


export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e65100',
    },
    secondary: {
      main: '#c62828',
    },
    error: {
      main: '#d50000',
    },
    background: {
      default: '#141414',
      paper: '#424242',
    },
  },
});