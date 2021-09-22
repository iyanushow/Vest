import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './utils/globalStyles';
import theme from './utils/theme';
import './App.css';

import Home from './pages';
import Auth from './pages/auth';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signup' exact>
            <Auth />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
