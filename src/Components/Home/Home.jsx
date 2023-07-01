import React from 'react'

import LandingPage from './Landing'
import Services from './Services'
import HighlightCase from './HighlightCase'
import TeamMembers from './TeamMembers'
import Enquiry from './Enquiry/Enquiry'
import Footer from './Footer'

import classes from './Home.module.css'

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Services />
      <HighlightCase />
      <TeamMembers />
      <Enquiry />
      <Footer />
    </div>
  )
}

export default HomePage