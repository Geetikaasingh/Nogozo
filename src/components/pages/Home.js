import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection/HeroSection'
import Features from '../Features/Features';
import Services from '../Service/Service';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


function Home(){
    return(
        <>
        
        <div className='hero-container' id="home">
             <video src="/videos/Y2Mate.is - No Copyright Study Table with moving Elements Free Animated Background Back to School Education-0_CqqoB4CAs-1080p-1639962592938_Trim.mp4" autoPlay loop muted/>
             <h1>Buy Rent Sell Books</h1>
             <h2>starting from ₹10 </h2>
             <h2>with FREE Home Delivery</h2>

           
         </div>
        
       
        
        </>
    )
}

export default Home;