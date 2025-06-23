// src/Pages/EmployeeJoining.js
import React from 'react';
import Product1 from '../../Assets/employeejoinkit1.jpg'; 
import Product2 from '../../Assets/emplyeejoinkit2.jpg';
import Product3 from '../../Assets/employeejoinkit3.jpg';
import Product4 from '../../Assets/employeejoinkit4.jpg';
import Product5 from '../../Assets/employeejoinkit5.jpg';
import Product6 from '../../Assets/employeejoinkit6.jpg';
import "../../Styles/JoiningKit.css"
const EmployeeJoinKit = () => {
 const products = [
    { id: 1, title: 'Product1', description: 'Customize Employee kit', image:Product1 },
    { id: 2, title: 'Product2', description: 'Welcome Package for new Employee', image: Product2 },
    { id: 3, title: 'Product3', description: 'Employee welcome kit', image: Product3 },
    { id: 4, title: 'Product4', description: 'Appreciation Employee kit', image: Product4 },
    { id: 5, title: 'Product5', description: 'Joining kit', image:Product5 },
    { id: 6, title: 'Product6', description: 'New Employee welcome kit',image: Product6 }
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
<h4>🎁 Employee Joining Kits – Make the First Day Memorable</h4>
At Shabdakruti Design, we believe that the first impression leaves a lasting impact. Our Employee Joining Kits are designed to make new team members feel welcomed, valued, and excited about their journey ahead.

Perfect for onboarding programs and induction ceremonies, these kits are a thoughtful way to introduce new hires to your company culture and show them that they’re more than just employees—they’re part of the team from day one.

Each kit is curated to include a blend of practical, branded, and personalized items, such as:

Premium diaries, notebooks, or planners

Customized bottles, sippers, or mugs (including eco-friendly bamboo options)

T-shirts or caps with company branding

Sticky notes, desk organizers, or accessories

Jute bags or pouches for an eco-conscious touch

Personal message cards or welcome letters

Whether it’s called the First Day Best Day Kit, The Onward Box, or Gear Up Pack, our joining kits turn ordinary onboarding into a motivating and memorable experience. Let’s help you create a warm welcome that inspires loyalty and pride from the very start.      </p>
    </div>
  );
};

export default EmployeeJoinKit;
