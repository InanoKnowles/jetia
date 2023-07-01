import React from 'react';

import classes from './ContactDetails.module.css'

const ContactDetails = () => {
  return (
    <div id={classes.contactDetails}>
      <div className={classes.detail}>
        <h4>Call Us</h4>
        <p>+61 481 104 225</p>
      </div>

      <div className={classes.detail}>
        <h4>Headquarters</h4>
        <p>Level 6222 Clarence St</p>
        <p>Sydney, NSW 2000</p>
      </div>
    </div>
  );
};

export default ContactDetails;
