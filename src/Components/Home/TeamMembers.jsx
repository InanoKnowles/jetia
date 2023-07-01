import React from 'react';

import classes from './TeamMembers.module.css';

const TeamMembers = () => {
  return (
    <div id={classes.teamMembers}>
      <h2>TeamMembers</h2>
      <div className={classes.teamPhotos}>
        <div className={classes.photo1}>
          <div className={`${classes.photo}`}>PHOTO</div>
          <h4>NAME</h4>
          <p>Digital Consultancy</p>
        </div>
        <div className={classes.photo2}>
          <div className={`${classes.photo}`}>PHOTO</div>
          <h4>NAME</h4>
          <p>Digital Consultancy</p>
        </div>
        <div className={classes.photo3}>
          <div className={`${classes.photo}`}>PHOTO</div>
          <h4>NAME</h4>
          <p>Digital Consultancy</p>
        </div>
        <div  className={classes.photo4}>
          <div className={`${classes.photo}`}>PHOTO</div>
          <h4>NAME</h4>
          <p>Digital Consultancy</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
