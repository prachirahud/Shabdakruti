import React from 'react'
import product1 from '../Assets/Trophies.jpg';
import product2 from '../Assets/gifts.jpg';
import product3 from '../Assets/drinkware.jpeg';
import product4 from '../Assets/T-shirtprint.jpg';
import product5 from '../Assets/visitingcard.jpg';
import product6 from '../Assets/corporate-promotional-gifts.jpg';
import product7 from '../Assets/bags.jpg';
import product8 from '../Assets/banner.jpg';
import BannerCarousel from './BannerCarousel';
import '../Styles/Home.css'; // Link your CSS file
function Home() {
  const products = [
      { id: 1, title: 'Product 1', description: 'Awards and Certificates', image: product1 },
      { id: 2, title: 'Product 2', description: 'Customized Gifts', image: product2 },
      { id: 3, title: 'Product 3', description: 'Drinkware', image: product3 },
      { id: 4, title: 'Product 4', description: 'T-shirts', image: product4 },
      { id: 5, title: 'Product 5', description: 'Multicolor Print', image: product5 },
      { id: 6, title: 'Product 6', description: 'Corporate Gifts', image: product6 },
      { id: 7, title: 'Product 7', description: 'Bags', image: product7 },
      { id: 8, title: 'Product 8', description: 'Banner', image: product8},
      
    ];
  
      const firstRow = products.slice(0,4);
    const secondRow = products.slice(4, 8);
  
  return (
 
      <div className="products-container" >
         <BannerCarousel />
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
    </div>
  
  )
}

export default Home
