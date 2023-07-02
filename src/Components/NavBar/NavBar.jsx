import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from '../UI/Button';
import MediaQuery from 'react-responsive';

import classes from './NavBar.module.css';

import jetia from '../images/logos/jetia-logo.png';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const activateMenuHandler = () => {
    setMenuActive(true);
  };

  const deactivateMenuHandler = () => {
    setMenuActive(false);
  };

  return (
    <div id={classes.navbar}>
      <MediaQuery minWidth={481} maxWidth={1440}>
        <div className={classes.list1}>
          <Link to="/aboutus">About Us</Link>
          <Link to="/casestudies">Work</Link>
        </div>

        <Link to="/">
          <img className={classes.logo} src={jetia} alt="jetia-logo" />
        </Link>

        <div className={classes.list2}>
          <HashLink smooth to="/#letschat">
            <Button> Let's Talk</Button>
          </HashLink>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={320} maxWidth={480}>
        {menuActive ? (
          <div>
            <div className={classes.menuIcon}>
              <div className={classes.crossIcon}>
                <span
                  onClick={deactivateMenuHandler}
                  className={`material-symbols-outlined`}
                >
                  close
                </span>
              </div>

              <img className={classes.logo} src={jetia} alt="jetia" />

              <div className={classes.block}></div>
            </div>
            <div className={classes.mobileNavItems}>
              <ul>
                <li>
                  <Link to="/" className={classes.listText}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/aboutme" className={classes.listText}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className={classes.listText}>
                    WORK
                  </Link>
                </li>
              </ul>

              <div
                className={classes.backdrop}
                onClick={deactivateMenuHandler}
              ></div>
            </div>
          </div>
        ) : (
          <div className={classes.menuIcon}>
            <p>
              <span
                onClick={activateMenuHandler}
                className={`material-symbols-outlined`}
              >
                menu
              </span>
            </p>

            <img className={classes.logo} src={jetia} alt="jetia" />

            <div className={classes.block}></div>
          </div>
        )}
      </MediaQuery>
    </div>
  );
};

export default NavBar;
