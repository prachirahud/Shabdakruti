import React from 'react';
import Product1 from '../Assets/pvisitingcard.jpg';
import Product2 from '../Assets/pamphlet.jpg';
import Product3 from '../Assets/brochure.jpg';
import Product4 from '../Assets/sticker.jpg';
import Product5 from '../Assets/calender-and-diary.jpg';
import Product6 from '../Assets/billbook.jpg';
import Product7 from '../Assets/menucard.jpg';
import Product8 from '../Assets/letterhead.jpg';  

       

import "../Styles/JoiningKit.css"
const MultiColorPrint = () => {
 const products = [
    { id: 1, title: 'Visiting Card', description: 'Glossy, matte, or textured with logos, photos, and vibrant designs', image:Product1 },
    { id: 2, title: 'Pamphlets / Flyers', description: 'For promotions, marketing, and event announcements with rich visuals', image: Product2 },
    { id: 3, title: 'Brochures / Catalogs', description: ' Multi-fold or booklet-style with colored images, graphics, and text', image: Product3 },
    { id: 4, title: 'Stickers & Labels', description: 'Printed in full color for packaging, branding, and gifts', image: Product4 },
    { id: 5, title: 'Calendars & Diaries', description: 'Custom-branded with colorful layouts and dates', image: Product5 },
    { id: 6, title: 'Bill Books / Invoices', description: 'With company logo and header in color', image: Product6 },
    { id: 7, title: 'Menu Card', description: 'For restaurants and events with food images and colored text', image: Product7 },
    { id: 8, title: 'Letterheads & Envelopes', description: 'With brand color schemes and logos', image: Product8 }

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
<h4>Multicolor printing</h4>


Multicolor printing is a dynamic process used to produce high-resolution, full-color designs that greatly enhance the visual appeal and branding of various materials. It plays a vital role in marketing and personalization by transforming everyday items into visually engaging tools. Products commonly produced with multicolor printing include visiting cards (glossy, matte, or textured), pamphlets and flyers for promotions, and brochures/catalogs featuring vibrant images and text layouts. It extends to stickers and labels for packaging, letterheads and envelopes with brand color schemes, and bill books/invoices carrying colorful headers and logos. Creative use is also seen in certificates, menus, calendars and diaries, all adorned with bright designs. Additionally, photo gifts like mugs, t-shirts, mousepads, and keychains are customized with vivid, lasting photo prints, making multicolor printing both versatile and impactful.</p>
   </div>
  );
};



export default MultiColorPrint;
