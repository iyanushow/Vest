import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { GlobalStyle } from './utils/globalStyles';
import theme from './utils/theme';
import './App.css';
import Hero from './components/Hero';
import Info from './components/InfoSection';

const App = () => {
  const [data, setData] = useState(null);
  const [nav, setNav] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then(({ data, nav }) => {
        setData(data);
        setNav(nav);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Fragment>
          <Navbar navItems={nav} />
          <Hero />
          <Info data={data} />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
