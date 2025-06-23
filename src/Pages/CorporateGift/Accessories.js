import React from 'react'
import "../../Styles/JoiningKit.css"
import Product1 from '../../Assets/cap.jpg';
import Product2 from '../../Assets/waistbands.jpg';
import Product3 from '../../Assets/pouches.jpg';
import Product4 from '../../Assets/fridge-magnet.jpg';
import Product5 from '../../Assets/cork.jpg';
import Product6 from '../../Assets/badge-holder.jpg';

function Accessories() {

  const products = [
    { id: 1, title: 'Product1', description: 'Caps', image:Product1 },
    { id: 2, title: 'Product2', description: 'Wristbands', image: Product2 },
    { id: 3, title: 'Product3', description: 'Pouches', image: Product3 },
    { id: 4, title: 'Product4', description: 'Fridge Magnets', image: Product4 },
    { id: 5, title: 'Product5', description: 'Cork Coasters', image:Product5 },
    { id: 6, title: 'Product6', description: 'Badge Holders',image: Product6 },

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
  <div className="products-row">
        {thirdRow.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.title} className="product-image" />
            <h4>{prod.title}</h4>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
      <p>
        <h4>Accessories</h4>

At Shabdakruti Design, we believe that the smallest details can make the biggest impact. Our curated range of Corporate Gift Accessories is designed to blend functionality with style, making everyday office items feel special. From sleek metal pens, keychains, and branded mouse pads to eco-friendly jute pouches, luggage tags, and mobile stands — each accessory is chosen to leave a lasting impression. Whether you're celebrating milestones, organizing events, or appreciating your team, these thoughtful add-ons elevate the gifting experience. Compact yet meaningful, our accessories are perfect for pairing with larger kits or as stand-alone gifts that reflect your brand’s identity and appreciation.  
</p>  
</div>
  );
};


export default Accessories;