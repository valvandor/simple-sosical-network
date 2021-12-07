import './App.css';
import MessageApp from './components/MessageApp';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'dark',
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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MessageApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
