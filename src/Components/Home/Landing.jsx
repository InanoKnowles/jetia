import React from 'react';

import classes from './Landing.module.css';

const LandingPage = () => {
  return (
    <div id={classes.landingPage}>
    
      <div className={classes.text}>
      <p>Located in Sydney</p>
        <div className={classes.topLine}>
          <p>GROWTH◯</p>
          <p>FROMTODAY◯</p>
          <p>EMPOWER◯</p>
          <p>UNLEASH◯</p>
          <p>TOFUTURE◯</p>
        </div>

        <div className={classes.bottomLine}>
          <p>UNLEASH◯</p>
          <p>GROWTH◯</p>
          <p>TOFUTURE◯</p>
          <p>FROMTODAY◯</p>
          <p>EMPOWER◯</p>
        </div>
      </div>

      <p className={classes.summary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer feugiat
        scelerisque varius morbi enim nunc faucibus a.
      </p>

      <button>Learn More</button>
    </div>
  );
};

export default LandingPage;
