import React from 'react';
import Product1 from '../Assets/Bag1.jpg';
import Product2 from '../Assets/bag2.jpg';
import Product3 from '../Assets/bag3.jpg';
import Product4 from '../Assets/bag4.jpg';
import Product5 from '../Assets/bags.jpg';
import Product6 from '../Assets/pouches.jpg';
import Product7 from '../Assets/pjutebag.jpg';
       

import "../Styles/JoiningKit.css"
const Bags = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'Bag for event', image:Product1 },
    { id: 2, title: 'Product2', description: 'Customized Bagpack ', image: Product2 },
    { id: 3, title: 'Product3', description: 'Customized Laptop Bag with logo and text', image: Product3 },
    { id: 4, title: 'Product4', description: 'Customized Bag with logo and text', image: Product4 },
    { id: 5, title: 'Product5', description: 'Customized theme Bags for events', image: Product5 },
    { id: 6, title: 'Product6', description: 'Small Potali Bags', image: Product6 },
    { id: 7, title: 'Product7', description: 'Customized Jute Bags', image: Product7 }
    
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
<h4>👜 Bags Product Description:</h4>


Discover our versatile collection of custom-designed bags, perfect for both corporate gifting and everyday use. From stylish tote bags and eco-friendly jute bags to premium laptop and travel bags, we offer a wide variety to suit your brand and purpose. Personalize them with logos, slogans, or custom artwork for events, giveaways, or employee welcome kits. Our bags combine functionality, durability, and design – making them a practical and memorable choice for any occasion. 
</p>
   </div>
  );
};

export default Bags;
