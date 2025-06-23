import React from 'react';
import '../Styles/Products.css'; // Link your CSS file
import Mug from '../Assets/mug.jpg';
import Gifts from '../Assets/pgifts.jpg';
import Drinkware from '../Assets/drinkware.jpeg';
import Tshirt from '../Assets/pt-shirt.jpg';
import Certificate from '../Assets/certificates.jpg';
import Trophy from '../Assets/ptrophy.jpg';
import Bags from '../Assets/bags.jpg';
import Banner from '../Assets/banner.jpg';
import Invitation from '../Assets/pinvitation.jpg';
import CorporateGifts from '../Assets/corporate-promotional-gifts.jpg';
import ICard from '../Assets/icard.jpg';
import KeyChain from '../Assets/Pkeychain.jpg';
import Card from '../Assets/pvisitingcard.jpg';
import Diary from '../Assets/pschooldiary.jpg';
import BillBook from '../Assets/billbook.jpg';

function Products() {
  const products = [
    { id: 1, title: 'Mug', description: 'Customize Mug', image: Mug },
    { id: 2, title: 'Gifts', description: 'Customized Gifts', image: Gifts },
    { id: 3, title: 'Drinkware', description: 'Drinkware', image: Drinkware },
    { id: 4, title: 'Tshirt', description: 'T-shirts', image: Tshirt },
    { id: 5, title: 'Certificate', description: 'Certificate', image: Certificate },
    { id: 6, title: 'Trophy', description: 'Trophy', image: Trophy },
    { id: 7, title: 'Bags', description: 'Bags', image: Bags},
    { id: 8, title: 'Banner', description: 'Banner', image: Banner},
    { id: 9, title: 'Invitation', description: 'Invitation', image: Invitation },
    { id: 10, title: 'CorporateGifts ', description: 'Corporate cutomized gifts', image: CorporateGifts},
    { id: 11, title: 'ICard', description: 'Identity cards', image: ICard },
    { id: 12, title: 'KeyChain', description: 'Key Chain', image: KeyChain },
{ id: 13, title: 'Card', description: 'Visiting card and letter Head', image: Card},
    { id: 14, title: 'Diary', description: 'School Diary', image: Diary },
    { id: 15, title: 'Bill Book', description: 'Bill Book', image: BillBook }
  ];

    const firstRow = products.slice(0,5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

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
    </div>
  );
}

export default Products;