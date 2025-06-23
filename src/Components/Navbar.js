import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
 import Logo from '../Assets/slogojpg.jpg';


function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
     
          <div className="navbar-logo">
         <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design </span>
     </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>

        
        <li
          className="dropdown"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ref={dropdownRef}
        >
          <span className="dropdown-title">Services ▾</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/printing">Printing Services</Link></li>
              <li><Link to="/services/design">Graphic Design</Link></li>
              <li><Link to="/services/gifts">Corporate Gifts</Link></li>
              <li><Link to="/services/custom">Custom Orders</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/products">All Products</Link></li>
                         
        <li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
      </ul>

       {/* ▼ Additional nav menu in next line ▼ */}
  <ul className="sub-menu">
    <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
    <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>
    {/* <li><Link to="/corporate-gifts">Corporate Gifts</Link></li> */}

<li className="dropdown">
  <span className="dropdown-title">Corporate Gifts ▾</span>
  <ul className="dropdown-menu">
    <li><Link to="/employee-joining">Employee Joining Kits</Link></li>
    <li><Link to="/engagement">Employee Engagement Kits</Link></li>
    <li><Link to="/hampers">Gift Hampers</Link></li>
    <li><Link to="/recognization">Rewards & Recognition</Link></li>
    <li><Link to="/accessories">Accessories</Link></li>
  </ul>
</li>



 {/* <li className="has-submenu">
          <span>Corporate Gifts ▾</span>
          <ul className="submenu">
            <li><Link to="/gifts/employee-joining">Employee Joining Kits</Link></li>
            <li><Link to="/gifts/engagement">Employee Engagement Kits</Link></li>
            <li><Link to="/gifts/hampers">Gift Hampers</Link></li>
            <li><Link to="/gifts/drinkware">Drinkware</Link></li>
            <li><Link to="/gifts/recognition">Rewards & Recognition</Link></li>
            <li><Link to="/gifts/bags">Bags</Link></li>
            <li><Link to="/gifts/calendars">Calendars & Diaries</Link></li>
            <li><Link to="/gifts/accessories">Accessories</Link></li>
          </ul>
        </li> */}
    <li><Link to="/tshirts">T-shirts</Link></li>
    <li><Link to="/banner">Banner</Link></li>
    <li><Link to="/cards">Cards</Link></li>
    <li><Link to="/multicolor-print">Multicolor Print</Link></li>
    <li><Link to="/bags">Bags</Link></li>


  </ul>
    </nav>
  );
}

export default Navbar;

  //  <li><Link to="/products">Awards & Certificates</Link></li>
  //        <li><Link to="/services">Customized Gifts</Link></li> 
  //                     <li><Link to="/services">Corporate Gifts</Link></li> 
  //       <li><Link to="/services">Drinkware</Link></li>
  //       <li><Link to="/services">T-shirts</Link></li> 
  //       <li><Link to="/services">Banner</Link></li>
  //       <li><Link to="/services">Cards</Link></li>
  //        <li><Link to="/services">Multicolor Print</Link></li>         
  //        <li><Link to="/services">Bags</Link></li> 



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css'; // Optional CSS file for styling
// import Logo from '../Assets/slogojpg.jpg';
// import  { useState, useEffect, useRef } from 'react';
// function Navbar() {

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="navbar">
//        <div className="navbar-logo">
//         <img src={Logo} alt="Logo" className="logo-image" />
//         <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design </span>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         {/* <li><Link to="/services">Services</Link></li> */}
//         <li
//           className="dropdown"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           ref={dropdownRef}
//         >
//           <span className="dropdown-title">Services ▾</span>
//           {isDropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="/services/printing">Printing Services</Link></li>
//               <li><Link to="/services/design">Graphic Design</Link></li>
//               <li><Link to="/services/gifts">Corporate Gifts</Link></li>
//               <li><Link to="/services/custom">Custom Orders</Link></li>
//             </ul>
//           )}
//         </li>

//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

