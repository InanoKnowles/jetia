import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage'
import AboutUs from './Components/AboutUs/AboutUs'
import CaseStudies from './Components/CaseStudies/CaseStudies'

import './App.css';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/casestudies" element={<CaseStudies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
