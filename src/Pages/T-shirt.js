// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../Assets/pt-shirt.jpg';
import Product2 from '../Assets/T-shirt.jpg';
import Product3 from '../Assets/T-shirtprint.jpg';
import Product4 from '../Assets/hoodies.jpg';
import Product5 from '../Assets/coupleTshirt.jpg';
import Product6 from '../Assets/familyTshirt.jpg'; 
 import Product7 from '../Assets/teamTshirt.jpg';
 import Product8 from '../Assets/theameTshirt.jpg';       

import "../Styles/JoiningKit.css"
const Tshirt = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'T-shirt for event', image:Product1 },
    { id: 2, title: 'Product2', description: 'Customized T-shirt with text', image: Product2 },
    { id: 3, title: 'Product3', description: 'Customized T-shirt with logo', image: Product3 },
    { id: 4, title: 'Product4', description: 'Customized Hoodies', image: Product4 },
    { id: 5, title: 'Product5', description: 'Couple T-shirts', image: Product5 },
    { id: 6, title: 'Product6', description: 'Family T-shirts', image: Product6 },
    { id: 7, title: 'Product7', description: 'Team T-shirts', image: Product7 },
    { id: 8, title: 'Product8', description: 'Themed T-shirts', image: Product8 }
  ];
    const firstRow = products.slice(0,4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);

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
<h4>👕 Customized T-Shirts for Every Occasion</h4>

At Shabdakruti Design, our personalized T-shirts are more than just apparel — they’re a statement of identity, team spirit, and brand culture. Whether you're designing for corporate events, employee onboarding, school functions, or promotional giveaways, our T-shirts combine comfort with customization. Made from high-quality cotton and breathable fabrics, each T-shirt can be printed or embroidered with your logo, slogan, or artwork. Choose from a wide range of colors, fits, and styles to match your brand aesthetics and event themes. Let your people wear your brand with pride — comfortably and confidently.</p>
    </div>
  );
};

export default Tshirt;
