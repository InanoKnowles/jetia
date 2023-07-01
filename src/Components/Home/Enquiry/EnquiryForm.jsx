import React from 'react';

import classes from './EnquiryForm.module.css'

const EnquiryForm = () => {
  return (
    <div id={classes.enquiryForm}>
      <form action="">
        <div className={`${classes.inlineInputs} ${classes.formRow}`}>
          <div>
            <label required>First Name * </label>
            <input type="text" />
          </div>

          <div>
            <label required>Last Name *</label>
            <input type="text" />
          </div>
        </div>

        <div className={classes.formRow}>
          <label required>Email *</label>
          <input type="text" />
        </div>

        <div className={classes.formRow}>
          <label required>Company Name</label>
          <input type="text" />
        </div>

        <div className={classes.formRow}>
          <label required>How Can we Help? *</label>
          <textarea type="text" />
        </div>

      </form>
        <button>Send</button>
    </div>
  );
};

export default EnquiryForm;
