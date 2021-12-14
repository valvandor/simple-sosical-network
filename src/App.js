import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chats from './components/Chats';
import { Container, ThemeProvider, Paper } from '@mui/material';
import { darkTheme } from './theme';
import HeadBar from './components/HeadBar';


function Home() {
  return ( <h1>Home</h1> );
}

function Profile() {
  return ( <h1>Profile</h1> );
}

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <HeadBar />
        <Paper>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/chats/">
                {props => <Chats parentPath={props.match.path} />}
              </Route>
            </Switch>
          </Container>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
