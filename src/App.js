import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MessageApp from './components/MessageApp';
import { AppBar, Button, ThemeProvider, Toolbar } from '@mui/material';
import { theme } from './theme/themeMUI';


function Home() {
  return ( <h1>Home</h1> );
}

function Profile() {
  return ( <h1>Profile</h1> );
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" component={Link}>Home</Button>
            <Button to="/profile/" component={Link}>Profile</Button>
            <Button to="/messages/" component={Link}>Messages</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/" component={Profile} />
          <Route exact path="/messages/">
            <MessageApp parent="messages" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
