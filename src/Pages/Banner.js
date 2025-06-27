import React from 'react';
import Product1 from '../Assets/banners1.jpg';
import Product2 from '../Assets/Banners2.jpg';
import Product3 from '../Assets/Banners3.jpg';
import Product4 from '../Assets/Banners4.jpg';
import Product5 from '../Assets/Banners5.jpg';
import Product6 from '../Assets/Banners6.jpg';
import Product7 from '../Assets/Banners7.jpg';
import Product8 from '../Assets/Banners8.jpg';
       

import "../Styles/JoiningKit.css"
const Banner = () => {
 const products = [
    { id: 1, title: 'Vinyl Banners', description: 'Weather-resistant for outdoor use (shops, exhibitions, events)', image:Product1 },
    { id: 2, title: 'Flex Banners', description: 'Most common for promotions, hoardings, and shop signage', image: Product2 },
    { id: 3, title: 'Roll-up Standees', description: 'Portable and used in seminars, trade fairs, and product launches', image: Product3 },
    { id: 4, title: 'Backdrop Banners', description: ' Event stage backgrounds, photo booths, or conference branding', image: Product4 },
    { id: 5, title: 'Canvas Prints', description: 'Decorative banners with artistic designs', image: Product5 },
    { id: 6, title: 'Mesh Banners', description: 'For windy outdoor locations, allowing air to pass through', image: Product6 },
    { id: 7, title: 'Glow Sign Boards / LED Boards', description: 'For nighttime visibility', image: Product7 },
    { id: 8, title: 'Promotional Flags', description: 'Feather or teardrop banners used in marketing', image: Product8 }
    
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

export default Banner;

