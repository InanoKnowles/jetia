import React from 'react';

import classes from './Services.module.css';

const Services = () => {
  return (
    <div id={classes.services}>
      <h2>Our Services</h2>
      <p className={classes.summary}>
        Introduction & our value, philosophy Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, Introduction & our
        value, philosophIntroduction & our value, philosophy Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad s minim veniam,
        Introduction & our value, philosoph
      </p>

      <div className={classes.blocks}>
        <div className={classes.block}></div>
        <div className={classes.block}></div>
        <div className={classes.block}></div>
        <div className={classes.block}></div>
        <div className={classes.block}></div>
  
      </div>

      <div className={classes.list}>
        <ul>
          <li>Product Design</li>
          <li>Product Design</li>
          <li>Product Design</li>
        </ul>

        <ul>
          <li>Product Design</li>
          <li>Product Design</li>
          <li>Product Design</li>
        </ul>

        <ul>
          <li>Product Design</li>
          <li>Product Design</li>
          <li>Product Design</li>
        </ul>

        <ul>
          <li>Product Design</li>
          <li>Product Design</li>
          <li>Product Design</li>
        </ul>

        <ul>
          <li>Product Design</li>
          <li>Product Design</li>
          <li>Product Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
