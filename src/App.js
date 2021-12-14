import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chats from './components/Chats';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme/themeMUI';
import HeadBar from './components/HeadBar';


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
        <HeadBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/chats/">
              {props => <Chats parentPath={props.match.path} />}
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
