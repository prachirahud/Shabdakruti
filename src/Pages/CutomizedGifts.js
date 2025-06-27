// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../Assets/gift1.jpg';
import Product2 from '../Assets/gift2.jpg';
import Product3 from '../Assets/gift3.jpg';
import Product4 from '../Assets/gift4.jpg';
import Product5 from '../Assets/gift5.jpg';
import Product6 from '../Assets/gift6.jpg'; 
import Product7 from '../Assets/gift7.jpg';
      

import "../Styles/JoiningKit.css"
const CustomizedGift = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'Customized mug', image:Product1 },
    { id: 2, title: 'Product2', description: 'Photo Frame', image: Product2 },
    { id: 3, title: 'Product3', description: 'Customized Calendar', image: Product3 },
    { id: 4, title: 'Product4', description: 'Customized Cushion', image: Product4 },
    { id: 5, title: 'Product5', description: 'Customized Diary', image: Product5 },
    { id: 6, title: 'Product6', description: 'Customized Keychain', image: Product6 },
    { id: 7, title: 'Product7', description: 'Customized T-shirt', image: Product7 }

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
<h4>🎁 Customized Gifts</h4>




Make every occasion memorable with our customized gifts that speak from the heart. Whether it's a birthday, wedding, corporate event, or festive celebration, we offer a wide range of personalized items including mugs, photo frames, cushions, keychains, t-shirts, and more. Add names, photos, quotes, or logos to create meaningful gifts that leave a lasting impression. Perfect for both personal and professional use, our gifts combine creativity, quality, and personal touch to bring joy to every recipient.</p> </div>
  );
};

export default CustomizedGift;

