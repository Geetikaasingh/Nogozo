 import React from 'react';

 import './HeroSection.css';
 import '../../App.css';
 function HeroSection(){
     return(
         <div className='hero-container'>
            <video src="/videos/video1.mp4" autoPlay loop muted/>
             <h1>Buy Rent Sell Books</h1>
             <h2>starting from ₹10 </h2>
             <h2>with FREE Home Delivery</h2>

           
         </div>
     )
 }

 export default HeroSection
