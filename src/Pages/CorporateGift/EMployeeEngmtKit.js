import React from 'react'
import "../../Styles/JoiningKit.css"
import Product1 from '../../Assets/eng1.jpg';
import Product2 from '../../Assets/eng2.jpg';
import Product3 from '../../Assets/eng3.jpg';
import Product4 from '../../Assets/eng4.jpg';
import Product5 from '../../Assets/eng5.jpg';
import Product6 from '../../Assets/eng6.jpg';
import Product7 from '../../Assets/eng7.jpg';
import Product8 from '../../Assets/eng8.jpg';
import Product9 from '../../Assets/eng9.jpg';
import Product10 from '../../Assets/eng10.jpg';
function EMployeeEngmtKit() {

  const products = [
    { id: 1, title: 'Product1', description: 'Branded notebooks or diaries', image:Product1 },
    { id: 2, title: 'Product2', description: 'Company-branded T-shirts, caps, or hoodies', image: Product2 },
    { id: 3, title: 'Product3', description: 'Inspirational quote cards', image: Product3 },
    { id: 4, title: 'Product4', description: 'Coffee mugs', image: Product4 },
    { id: 5, title: 'Product5', description: 'Certificate of appreciation', image:Product5 },
    { id: 6, title: 'Product6', description: 'Tote bags or laptop sleeves',image: Product6 },
    { id: 7, title: 'Product7', description: 'Festive-themed gift boxes (e.g., Diwali, Christmas)', image: Product7 },
    { id: 8, title: 'Product8', description: 'Stickers and pins with motivational quotes', image: Product8 },
    { id: 9, title: 'Product9', description: 'Greeting cards and party poppers', image: Product9 },
    { id: 10, title: 'Product10', description: 'Custom calendar & photo frame', image: Product10 },
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
        <h4>✨ Employee Engagement Kits – Build a Culture of Appreciation</h4>

At Shabdakruti Design, we understand that a motivated and valued workforce is the backbone of every successful organization. That’s why our Employee Engagement Kits are thoughtfully curated to celebrate meaningful moments, boost morale, and foster a sense of connection across your team.

These kits are perfect for virtual events, wellness initiatives, and special occasions like Women’s Day, Annual Day, Work Anniversaries, Festive Celebrations, or Team Milestones. Each kit reflects your company’s commitment to employee well-being, creativity, and engagement.

What’s inside?

Motivational desk accessories & goodies

Custom mugs or sippers

Eco-friendly items like jute pouches

Wellness essentials & quirky stationery

Desk organizers, sticky notes, or planners

Personalized thank-you notes or message cards

These kits go beyond simple gifts—they help build a stronger, happier, and more connected workplace. Let’s celebrate your employees with kits that make them feel truly appreciated—one thoughtful package at a time.      </p>
    </div>
  );
};


export default EMployeeEngmtKit


// Branded notebooks or diaries
// Company-branded T-shirts, caps, or hoodies
// Inspirational quote cards
// Coffee mugs or sippers
// Certificate of appreciation
// Tote bags or laptop sleeves
// Festive-themed gift boxes (e.g., Diwali, Christmas)
// Stickers and pins with motivational quotes
// Greeting cards and party poppers

// Custom calendar or photo frame