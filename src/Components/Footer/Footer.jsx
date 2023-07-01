import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div id={classes.footer}>
      <div className={classes.logo}>JETIA</div>

      <ul className={classes.socials}>
        <li>▢</li>
        <li>▢</li>
        <li>▢</li>
        <li>▢</li>
      </ul>
    </div>
  )
}

export default Footer