import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chats from './components/Chats';
import { Container, ThemeProvider, Paper } from '@mui/material';
import HeadBar from './components/HeadBar';
import { useSelector } from 'react-redux';
import { Profile } from './routes/Profile/Profile';
import { Home } from './routes/Home';
import { getSelectedTheme, getThemes } from './store/themes/selectors';


function App() {
  const themes = useSelector(getThemes)
  const selectedTheme = useSelector(getSelectedTheme)

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
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
