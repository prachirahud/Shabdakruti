// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../../Assets/hamper1.jpg'; 
import Product2 from '../../Assets/hamper2.jpg';
import Product3 from '../../Assets/hamper3.jpg';    
import Product4 from '../../Assets/hamper4.jpg';
import Product5 from '../../Assets/hamper5.jpg';
import Product6 from '../../Assets/hamper6.jpg';
import Product7 from '../../Assets/hamper7.jpg';
import Product8 from '../../Assets/hamper8.jpg';

import "../../Styles/JoiningKit.css"
const Hampers = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'Branded wallet or card holder', image:Product1 },
    { id: 2, title: 'Product2', description: 'Premium leather diary or planner', image: Product2 },
    { id: 3, title: 'Product3', description: 'Bamboo bottles or mugs', image: Product3 },
    { id: 4, title: 'Product4', description: 'Jute bags or pouches', image: Product4 },
    { id: 5, title: 'Product5', description: 'Accessories (keychain, badge, etc.)', image: Product5 },
    { id: 6, title: 'Product6', description: 'Personal message card', image: Product6 },
    { id: 7, title: 'Product7', description: 'Sticky notes, organizers', image: Product7 },
    { id: 8, title: 'Product8', description: 'Elegant pen', image: Product8 }
  
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
        <h4>🎁 Corporate Gift Hampers</h4>

At Shabdakruti Design, we believe that thoughtful gifting is a powerful way to express appreciation, celebrate milestones, and build lasting relationships. Our Corporate Gift Hampers are curated to suit a variety of occasions—from welcoming new employees to recognizing long-term clients. Each hamper is tastefully packed with premium items such as bamboo bottles, jute bags, personalized stationery, desk accessories, and handwritten message cards. Whether it's for a festive occasion, employee appreciation day, or a client onboarding kit, our hampers reflect professionalism, care, and your brand’s values. Let your gifts speak volumes with personalized, high-quality, and eco-conscious choices.      </p>
    </div>
  );
};

export default Hampers;
