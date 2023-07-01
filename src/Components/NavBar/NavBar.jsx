import React from 'react';

import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div id={classes.navbar}>
      <ul className={classes.list1}>
        <li>About Us</li>
        <li>Work</li>
      </ul>

      <h1>JEITA LOGO</h1>

      <ul>
        <li>Let's Talk</li>
      </ul>
    </div>
  );
};

export default NavBar;
