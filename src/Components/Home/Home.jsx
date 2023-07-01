import React from 'react'

import LandingPage from './Landing'
import Services from './Services'
import HighlightCase from './HighlightCase'
import TeamMembers from './TeamMembers'
import Enquiry from './Enquiry/Enquiry'

import classes from './Home.module.css'

const HomePage = () => {
  return (
    <div id={classes.home}>
      <LandingPage />
      <Services />
      <HighlightCase />
      <TeamMembers />
      <Enquiry />

    </div>
  )
}

export default HomePage