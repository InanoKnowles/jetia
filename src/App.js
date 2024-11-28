import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <ScrollToTop>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/casestudies" element={<CaseStudies />}></Route>
        </Routes>

        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
