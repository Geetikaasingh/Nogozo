import React from 'react';
import './Service.css'
function Services() {
    return (
        <div className="cards" id="services">
            <h1>Our Services</h1>
      <div className="wrapper">
        <Card
          img="https://www.nogozo.com/static/mainapp/img/11.png"
          title="BUY"
          description="New Books"
          description1="Second-hand Books"
          description2="24 hour delivery"
          description3="School And Competition Books"

        />
  
        <Card
          img="https://nogozo.com/static/mainapp/img/33.png"
          title="RENT"
          description="Starting at ₹10"
          description1="Delivery within 24 hours"
          description2="FREE Pickup"
          description3="All fiction & non-fiction novels"
         
        />
        <Card
          img="https://nogozo.com/static/mainapp/img/22.png"
          title="SELL"
          description="Instant Re-selling"
          description1="Sell books within 24 hours"
          description2="FREE Pickup"
          description3="Get instant payment"
         
        />
        
      </div>
      </div>
    );
  }
  
  function Card(props) {
    return (
        
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>

          <p className="card__description">{props.description}</p>
          <p className="card__description">{props.description1}</p>
          <p className="card__description">{props.description2}</p>
          <p className="card__description">{props.description3}</p>
          
        </div>
      </div>
     
    );
  }

  export default Services;
  
 