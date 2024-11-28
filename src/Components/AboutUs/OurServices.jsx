import React from 'react';
import MediaQuery from 'react-responsive';

import classes from './OurServices.module.css';

const OurServices = () => {
  return (
    <div id={classes.list}>
      <MediaQuery minWidth={601} maxWidth={1440}>
        <ul>
          <li>Market Research</li>
          <li>Data Analysis</li>
          <li className={`${classes} orange`}>Branding Strategy</li>
        </ul>
        <ul>
          <li className={`${classes} blue`}>Digital Creative</li>
          <li>Product Design</li>
          <li>Service Design</li>
        </ul>
        <ul>
          <li>Art Direction</li>
          <li className={`${classes} armyGreen`}>Visual Identity</li>
          <li>Brand GuideLines</li>
        </ul>
        <ul>
          <li>Web Accessibility</li>
          <li className={`${classes} pink`}>Interface Design</li>
          <li>User Research</li>
        </ul>
        <ul>
          <li className={`${classes} taupe`}>Mobile Design</li>
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
  );
};

export default OurServices;
