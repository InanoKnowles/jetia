import React from 'react';
import MediaQuery from 'react-responsive';
import classes from './AboutUs.module.css';
import OurServices from './OurServices';
import MeetTeam from './MeetTeam';

const AboutUs = () => {
  return (
    <div id={classes.aboutUs}>
      <section id={classes.whoweare}>
        <div id={classes.empowerSection}>
          <h2 id={classes.heading}>
            WE EMPOWER FEMALE ENTREPRENEURS TO THRIVE IN THE DIGITAL WORLD
            <span className={classes.circle}>◯</span>
          </h2>
        </div>
        <div id={classes.decription}>
          <p>
            <strong>jetia</strong> is a leading tech-savvy product development
            agency in tech innovation, promoting gender equality, and making a
            lasting impact in the industry.
          </p>
          <p>
            We empower women in technology and revolutionise the industry
            through innovative solutions, fostering diversity, and supporting
            start-ups. We empower women power by driving innovation, supporting
            start-ups, and promoting gender equality.
          </p>
        </div>
				
      </section>
      <p id={classes.whoWeAre}>
        We are an international team of passionate Designers, Developers, Brand
        Strategists & Data Analysts.
      </p>

      <MeetTeam></MeetTeam>

      <h3 id={classes.supportText}>
        Wheather you're starting out or looking to expand presence, we are here
        to provide you with the tools, strategies and support you need
        <span className={classes.circle}>◯</span>
      </h3>

      <OurServices></OurServices>
    </div>
  );
};

export default AboutUs;
