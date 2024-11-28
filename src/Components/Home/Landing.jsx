import React from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

import InfiniteLooper from '../UI/InfiniteLooper';

import classes from './Landing.module.css';
import '../../App.css';

const LandingPage = () => {
  return (
    <div id={classes.landing}>
      <div className={classes.text}>
        <p>BRISBANE • MELBOURNE • SYDNEY</p>

        <InfiniteLooper speed="50" direction="right">
          <div>
            <div className={classes.topLine}>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>AMBITIOUS</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} blue`}>PASSION</p>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>UNLEASH</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} armyGreen`}>EMPOWER</p>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>GROWTH</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} pink`}>INNOVATIVE</p>
            </div>
          </div>
        </InfiniteLooper>

        <InfiniteLooper speed="50" direction="left">
          <div>
            <div className={classes.bottomLine}>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>PASSION</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} orange`}>AMBITIOUS</p>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>INNOVATIVE</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} pink`}>UNLEASH</p>
              <p className={classes.circle}>◯</p>
              <p className={classes.bigText}>EMPOWER</p>
              <p className={classes.circle}>◯</p>
              <p className={`${classes.bigText} blue`}>GROWTH</p>
            </div>
          </div>
        </InfiniteLooper>
      </div>

      <p className={classes.summary}>
        We're dedicated to providing range of comprehensive services tailored
        specifically to the needs of women-owned businesses.
      </p>

      <Link to="/aboutus">
        <Button>Learn More</Button>
      </Link>
    </div>
  );
};
export default LandingPage;
