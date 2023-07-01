import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from '../UI/Button';

import classes from './NavBar.module.css';

import logo from '../images/logos/jetia-logo.png';

const NavBar = () => {
  return (
    <div id={classes.navbar}>
      <div className={classes.list1}>
        <Link to="/aboutus">About Us</Link>
        <Link to="/casestudies">Work</Link>
      </div>

      <Link to="/">
        <img className={classes.logo} src={logo} alt="jeita-logo" />
      </Link>

      <div className={classes.list2}>
        <HashLink smooth to="/#letschat">
          <Button> Let's Talk</Button>
        </HashLink>
      </div>
    </div>
  );
};

export default NavBar;
