import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = ({ url, gaId }) => {
  useEffect(() => {
    ReactGA.initialize(gaId);
  }, []);
  useEffect(() => {
    ReactGA.pageview(url);
  }, [url]);

  return <></>;
};

export default Analytics;
