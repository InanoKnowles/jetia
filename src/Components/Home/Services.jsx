import React from 'react';
import MediaQuery from 'react-responsive';
import classes from './Services.module.css';

import webflow from '../images/logos/webflow.png';
import splunk from '../images/logos/splunk.png';
import stripe from '../images/logos/stripe.png';
import woo from '../images/logos/woo.png';
import wordpress from '../images/logos/wordpress.png';
import braze from '../images/logos/braze.png';
import hubspot from '../images/logos/hubspot.png';

const Services = () => {
  return (
    <div id={classes.services}>
      <h2 className={classes.heading}>Our Services</h2>
      <p className={classes.summary}>
      We empower female entrepreneurs to thrive in the digital world and build successful businesses that leave a lasting impact. 
We specialise in the digital design and creative approach to helping women transform their ideas into thriving online ventures.
      </p>

      <div className={classes.logos}>
        <div className={classes.block}>
          <img className={classes.logo} src={webflow} alt="webflow" />
        </div>
        <div className={classes.block}>
          <img className={classes.logo} src={splunk} alt="splunk" />
        </div>
        <div className={classes.block}>
          <img className={classes.logo} src={stripe} alt="stripe" />
        </div>
        <div className={classes.block}>
          <img
            className={`${classes.woo} ${classes.logo}`}
            src={woo}
            alt="woo"
          />
        </div>
        <div className={classes.block}>
          <img className={classes.logo} src={wordpress} alt="wordpress" />
        </div>
        <div className={classes.block}>
          <img className={classes.logo} src={hubspot} alt="hubspot" />
        </div>
        <div className={classes.block}>
          <img className={classes.logo} src={braze} alt="braze" />
        </div>
      </div>

      <div className={classes.list}>
        <MediaQuery minWidth={601} maxWidth={1440}>
          <ul>
            <li>Market Research</li>
            <li className="orange">Data Analysis</li>
            <li >Branding Strategy</li>
          </ul>

          <ul>
            <li className="blue">Digital Creative</li>
            <li>Product Design</li>
            <li>Service Design</li>
          </ul>

          <ul>
            <li>Art Direction</li>
            <li>Visual Identity</li>
            <li className="armyGreen">Brand Guidelines</li>
          </ul>

          <ul>
            <li>Web Accessibility</li>
            <li className="pink">Interface Design</li>
            <li>User Research</li>
          </ul>

          <ul>
            <li className="taupe">Mobile Design</li>
            <li>Content Production</li>
            <li>Copywriting</li>
          </ul>
        </MediaQuery>
        
        <MediaQuery minWidth={320} maxWidth={600}>
          <ul>
            <li>Market Research</li>
            <li className="orange">Data Analysis</li>
            <li>Branding Strategy</li>
            <li>Digital Creative</li>
            <li>Product Design</li>
            <li  className="blue">Art Direction</li>
            <li>Visual Identity</li>
          </ul>

          <ul>
            <li className="armyGreen">Brand Guidelines</li>
            <li>Web Accessibility</li>
            <li className="pink">Interface Design</li>
            <li>User Research</li>
            <li>Mobile Design</li>
            <li className="taupe">Content Production</li>
            <li>Copywriting</li>
          </ul>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Services;
