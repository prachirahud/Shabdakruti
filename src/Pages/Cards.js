// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../Assets/invitationcard.jpg';
import Product2 from '../Assets/bussinesscard.jpg';
import Product3 from '../Assets/greetingcard.jpg';
import Product4 from '../Assets/icards.jpg';
import Product5 from '../Assets/menucard.jpg';
import Product6 from '../Assets/visiting.jpg'; 
      

import "../Styles/JoiningKit.css"
const Cards = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'Invitation card', image:Product1 },
    { id: 2, title: 'Product2', description: 'Business card', image: Product2 },
    { id: 3, title: 'Product3', description: 'Greeting card', image: Product3 },
    { id: 4, title: 'Product4', description: 'ID card', image: Product4 },
    { id: 5, title: 'Product5', description: 'Menu card', image: Product5 },
    { id: 6, title: 'Product6', description: 'Visiting card', image: Product6 },

  ];
    const firstRow = products.slice(0,4);
  const secondRow = products.slice(4, 8);

  return (
    <div className="products-container">
      <div className="products-row">
        {firstRow.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.title} className="product-image" />
            <h4>{prod.title}</h4>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
       <div className="products-row">
        {secondRow.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.title} className="product-image" />
            <h4>{prod.title}</h4>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>

      <p>
<h4>💼 Professional Cards That Speak for Your Brand</h4>


At Shabdakruti Design, we understand that the smallest details can leave the biggest impressions. Our professionally crafted visiting cards, letterheads, and identity cards help establish your brand identity with style and consistency. Whether it’s a sleek business card that makes networking impactful, a letterhead that adds credibility to your communication, or an ID card that strengthens security and professionalism — every card is designed with precision and purpose. Choose from premium paper stock, modern layouts, and custom branding elements to represent your business with elegance and confidence.   
</p> </div>
  );
};

export default Cards;
