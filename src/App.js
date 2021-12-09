import './App.css';
import MessageApp from './components/MessageApp';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/themeMUI';


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
