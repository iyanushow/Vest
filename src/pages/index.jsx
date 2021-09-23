import { Fragment, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/InfoSection';
import Services from '../components/Services';
import { animateScroll } from 'react-scroll';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  const nav = ['about', 'discover', 'contact', 'services'];
  const [apiData, setApiData] = useState(null);
  const backToTop = () => animateScroll.scrollToTop();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Navbar navItems={nav} toggleTop={backToTop} />

      {apiData && (
        <Fragment>
          <Hero />
          <Info data={apiData.data} />
          <Services services={apiData.services} />
        </Fragment>
      )}

      <Footer toggleTop={backToTop} />
    </Fragment>
  );
};

export default Home;
