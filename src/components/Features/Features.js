import React from 'react';
import './Features.css'
function Features() {
    return (
        <div className="cards" id="features">
            <h1>Features</h1>
      <div className="wrapper">
        <Card
          img="https://nogozo.com/static/mainapp/img/s11.png"
          title="All-in-one Platform"
          description="A single dedicated platform to buy, rent and sell new as well as used books."
         

        />
  
        <Card
          img="https://nogozo.com/static/mainapp/img/s22.png"
          title="Free Delivery"
          description="Get free delivery at your doorstep on all orders above ₹999."
        
         
        />
        <Card
          img="https://nogozo.com/static/mainapp/img/s33.png"
          title="Instant Reselling"
          description="Sell your books while sitting at home with free pickup within 24 hours."
         
         
        />
        </div>
        <div className="wrapper">
        <Card
          img="https://nogozo.com/static/mainapp/img/s44.png"
          title="Rent books"
          description="Rent all academic and non-academic books & novels starting from ₹10 only."
         
         
        />
        <Card
          img="https://nogozo.com/static/mainapp/img/s55.png"
          title="FREE Pickup"
          description="Pickup of books and novels for renting and re-selling is totally free of cost."
         
         
        />
        <Card
          img="https://nogozo.com/static/mainapp/img/s66.png"
          title="Customer Support"
          description="Get 24X7 chat support help to address all your doubt & queries."
         
         
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
         
        </div>
      </div>
     
    );
  }

  export default Features;
  
 