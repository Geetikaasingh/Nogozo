import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Features from './components/Features/Features';
import Services from './components/Service/Service';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Features/>
      <Footer/>
      
      
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contactus' element={<Footer/>}/>
          
    

          
          
          
          
        </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
