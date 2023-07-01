import React from "react";

import classes from "./TeamMembers.module.css";

const TeamMembers = () => {
  return (
    <div id={classes.teamMembers}>
      <h2>Meet the Team</h2>
      <div className={classes.teamPhotos}>
        <div className={`${classes.photo1}`}>
          <div className={`${classes.photo} ${classes.p1}`}></div>
          <h4>ANKITA</h4>
          <p>Project Manager</p>
        </div>

        <div className={`${classes.photo2}`}>
          <div className={`${classes.photo} ${classes.p2}`}></div>
          <h4>ESTHER</h4>
          <p>UX Designer</p>
        </div>

        <div className={`${classes.photo3}`}>
          <div className={`${classes.photo} ${classes.p3}`}></div>
          <h4>INANO</h4>
          <p>Digital Consultancy</p>
        </div>

        <div className={`${classes.photo4}`}>
          <div className={`${classes.photo} ${classes.p4}`}></div>
          <h4>TINA</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
