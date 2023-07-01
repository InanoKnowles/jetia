import React from 'react';

import Button from '../UI/Button'

import classes from './Landing.module.css';
import '../../App.css'

const LandingPage = () => {
  return (
    <div id={classes.landing}>
      <div className={classes.text}>
        <p>Located in Sydney</p>
        <div className={classes.topLine}>
          <p className={classes.bigText}>GROWTH</p>
          <p className={classes.circle}>◯</p>
          <p className={`${classes.bigText} blue`}>PASSION</p>
          <p className={classes.circle}>◯</p>
          <p className={classes.bigText}>UNLEASH</p>
          <p className={classes.circle}>◯</p>
          <p className={`${classes.bigText} armyGreen`}>EMPOWER</p>
          <p className={classes.circle}>◯</p>
          <p className={classes.bigText}>AMBITIOUS</p>
        </div>

        <div className={classes.bottomLine}>
          <p className={`${classes.bigText} orange`}>UNLEASH</p>
          <p className={classes.circle}>◯</p>
          <p className={classes.bigText}>AMBITIOUS</p> 
          <p className={classes.circle}>◯</p>
          <p className={`${classes.bigText} pink`}>GROWTH</p> 
          <p className={classes.circle}>◯</p>
          <p className={classes.bigText}>PASSION</p> 
          <p className={classes.circle}>◯</p>
          <p className={classes.bigText}>EMPOWER</p>
        </div>
      </div>

      <p className={classes.summary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer feugiat
        scelerisque varius.
      </p>

      <Button>Learn More</Button>
    </div>
  );
};

export default LandingPage;
