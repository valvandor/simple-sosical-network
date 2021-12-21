import { createTheme } from '@mui/material';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
      default: '#f5f5f5',
      paper: '#eeeeee',
    },
  },
});