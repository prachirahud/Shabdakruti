// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../../Assets/AwardandTrophy.jpg'; 
import Product2 from '../../Assets/certificates.jpg';
import Product3 from '../../Assets/medals.jpg';    
import Product4 from '../../Assets/rewardstshirt.jpg';
import Product5 from '../../Assets/gift-vouchers.jpg';
import "../../Styles/JoiningKit.css"
const Reward = () => {

 const products = [ 
    { id: 1, title: 'Product1', description: 'Awards and trophy', image:Product1 },
    { id: 2, title: 'Product2', description: 'Certificates', image: Product2 },
    { id: 3, title: 'Product3', description: 'Medals', image: Product3 },
    { id: 4, title: 'Product4', description: 'Employee of the Month T-shirt', image: Product4 },
    { id: 5, title: 'Product5', description: 'Gift Vouchers', image: Product5 },
    
  
  
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
        <h4>🏆 Rewards & Recognition</h4>
        

At Shabdakruti Design, we believe that celebrating achievements and recognizing efforts is essential to building a high-performing, motivated workforce. Our Rewards & Recognition offerings are crafted to honor employee milestones, exceptional contributions, and team success stories with elegance and impact. From premium trophies, custom medals, and certificates to personalized apparel, elegant desk accessories, and curated hampers — each gift reflects genuine appreciation and corporate pride.

Whether it’s for “Employee of the Month,” long service awards, sales achievements, or annual recognitions, our thoughtfully designed products not only reward excellence but also inspire continued dedication and loyalty. Let your team know they matter — with gifts that speak louder than words.


</p>
    </div>
  );
};

export default Reward;
