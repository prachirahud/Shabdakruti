import React from 'react'


import Product1 from '../Assets/AwardandTrophy.jpg'; 
import Product2 from '../Assets/certificates.jpg';
import Product3 from '../Assets/medals.jpg';    
import "../Styles/JoiningKit.css"
const AwardsCertificaates = () => {

 const products = [ 
    { id: 1, title: 'Product1', description: ' Customized all types of Awards and trophy', image:Product1 },
    { id: 2, title: 'Product2', description: 'With colorful borders, background images, and seals', image: Product2 },
    { id: 3, title: 'Product3', description: 'Medals', image: Product3 },
    
  
  
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
        <h4> 🏆 Awards & Certificates</h4>
        

At Shabdakruti Design,
Celebrate achievements with our premium Awards and Certificates designed to leave a lasting impression. Whether you're recognizing employee excellence, academic success, or event milestones, our collection includes elegant trophies, plaques, medals, and professionally printed certificates. Customize each piece with names, logos, and personalized messages to make every recognition moment truly special. Crafted with quality materials and attention to detail, our awards reflect the honor and pride of every accomplishment.

</p>
    </div>
  );
};



export default AwardsCertificaates;
