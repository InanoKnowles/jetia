import React from 'react';

import EnquiryForm from './EnquiryForm';
import ContactDetails from './ContactDetails';

import classes from './Enquiry.module.css';

const Enquiry = () => {
  return (
    <div id='letschat'>
      <div id={classes.enquiry}>
        <h3>Curious how we can help?</h3>
        <h2>Let's Chat</h2>

        <div className={classes.content}>
          <EnquiryForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
