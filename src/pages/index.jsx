import { Fragment, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/InfoSection';
import Services from '../components/Services';

const Home = () => {
  const [apiData, setApiData] = useState(null);

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
      {apiData && (
        <Fragment>
          <Hero />
          <Info data={apiData.data} />
          <Services services={apiData.services} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
