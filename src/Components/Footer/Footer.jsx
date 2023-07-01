import React from 'react'

import classes from './Footer.module.css'

import jetia from '../images/logos/jetia-logo.png'
import dribble from '../images/socialMedia/dribble.png'
import instagram from '../images/socialMedia/instagram.png'
import linkedin from '../images/socialMedia/linkedin.png'
import pinterest from '../images/socialMedia/pinterest.png'

const Footer = () => {
  return (
    <div id={classes.footer}>
      <div className={classes.logo}><img src={jetia}/></div>

      <div className={classes.socials}>
        <a href="#"><img src={dribble} alt="" /></a>
        <a href="#"><img src={instagram} alt="" /></a>
        <a href="#"><img src={linkedin} alt="" /></a>
        <a href="#"><img src={pinterest} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer