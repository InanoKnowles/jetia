import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/casestudies" element={<CaseStudies />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
