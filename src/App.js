import { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { GlobalStyle } from './utils/globalStyles';
import theme from './utils/theme';
import './App.css';

const App = () => {
  const navItems = ['about', 'discover', 'services', 'sign in'];
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Fragment>
          <Navbar navItems={navItems} />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
