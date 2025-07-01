// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import Logo from '../Assets/slogojpg.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const drawerRef = useRef();


  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerContent(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
     
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design</span>
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li onClick={() => setDrawerContent({
          title: "Services",
          links: [
            { label: "Printing Services", to: "/services/printing" },
            { label: "Graphic Design", to: "/services/design" },
            { label: "Corporate Gifts", to: "/services/gifts" },
            { label: "Custom Orders", to: "/services/custom" },
          ]
        })}>
          <span className="dropdown-title">Services ▸</span>
        </li>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="sub-menu-wrapper">
        <ul className={`sub-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
          <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>
          <li onClick={() => setDrawerContent({
            title: "Corporate Gifts",
            links: [
              { label: "Employee Joining Kits", to: "/employee-joining" },
              { label: "Employee Engagement Kits", to: "/engagement" },
              { label: "Gift Hampers", to: "/hampers" },
              { label: "Rewards & Recognition", to: "/recognization" },
              { label: "Accessories", to: "/accessories" },
            ]
          })}>
            <span className="dropdown-title">Corporate Gifts ▸</span>
          </li>
          <li><Link to="/tshirts">T-shirts</Link></li>
          <li><Link to="/banner">Banner</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/multicolor-print">Multicolor Print</Link></li>
          <li><Link to="/bags">Bags</Link></li>
        </ul>
      </div>

      {drawerContent && (
        <div className="drawer-overlay" onClick={() => setDrawerContent(null)}>
          <div className="drawer" ref={drawerRef} onClick={(e) => e.stopPropagation()}>
            <h3 className="drawer-title">{drawerContent.title}</h3>
            <ul className="drawer-menu">
              {drawerContent.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} onClick={() => setDrawerContent(null)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
// import Logo from '../Assets/slogojpg.jpg';

// function Navbar() {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isCorporateOpen, setIsCorporateOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const servicesRef = useRef();
//   const corporateRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setIsServicesOpen(false);
//       }
//       if (corporateRef.current && !corporateRef.current.contains(event.target)) {
//         setIsCorporateOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-top">
//         <div className="navbar-logo">
//           <img src={Logo} alt="Logo" className="logo-image" />
//           <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design</span>
//         </div>
//         <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           ☰
//         </div>
//       </div>

//       <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//         <li><Link to="/">Home</Link></li>

//         <li
//           className="dropdown"
//           onClick={() => setIsServicesOpen(!isServicesOpen)}
//           ref={servicesRef}
//         >
//           <span className="dropdown-title">Services ▾</span>
//           {isServicesOpen && (
//             <ul className="dropdown-menu show">
//               <li><Link to="/services/printing">Printing Services</Link></li>
//               <li><Link to="/services/design">Graphic Design</Link></li>
//               <li><Link to="/services/gifts">Corporate Gifts</Link></li>
//               <li><Link to="/services/custom">Custom Orders</Link></li>
//             </ul>
//           )}
//         </li>

//         <li><Link to="/products">All Products</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>

//       <div className="sub-menu-wrapper">
//         <ul className={`sub-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//           <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
//           <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>

//           <li
//             className="dropdown"
//             onClick={() => setIsCorporateOpen(!isCorporateOpen)}
//             ref={corporateRef}
//           >
//             <span className="dropdown-title">Corporate Gifts ▾</span>
//             {isCorporateOpen && (
//               <ul className="dropdown-menu show">
//                 <li><Link to="/employee-joining">Employee Joining Kits</Link></li>
//                 <li><Link to="/engagement">Employee Engagement Kits</Link></li>
//                 <li><Link to="/hampers">Gift Hampers</Link></li>
//                 <li><Link to="/recognization">Rewards & Recognition</Link></li>
//                 <li><Link to="/accessories">Accessories</Link></li>
//               </ul>
//             )}
//           </li>

//           <li><Link to="/tshirts">T-shirts</Link></li>
//           <li><Link to="/banner">Banner</Link></li>
//           <li><Link to="/cards">Cards</Link></li>
//           <li><Link to="/multicolor-print">Multicolor Print</Link></li>
//           <li><Link to="/bags">Bags</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
// import Logo from '../Assets/slogojpg.jpg';

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
// // const subDropdownRef = useRef();

//   const dropdownRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);


//   return (
   


//      <nav className="navbar">
//       <div className="navbar-top">
//         <div className="navbar-logo">
//           <img src={Logo} alt="Logo" className="logo-image" />
//           <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design</span>
//         </div>
//         <div
//           className="hamburger"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           ☰
//         </div>
//       </div>

//       <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//         <li><Link to="/">Home</Link></li>

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

//         <li><Link to="/products">All Products</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
// <div className="sub-menu-wrapper">
//       <ul className={`sub-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//         <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
//         <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>
 

//         <li className="dropdown">
//           <span className="dropdown-title">Corporate Gifts ▾</span>
//           <ul className="dropdown-menu">
//             <li><Link to="/employee-joining">Employee Joining Kits</Link></li>
//             <li><Link to="/engagement">Employee Engagement Kits</Link></li>
//             <li><Link to="/hampers">Gift Hampers</Link></li>
//             <li><Link to="/recognization">Rewards & Recognition</Link></li>
//             <li><Link to="/accessories">Accessories</Link></li>
//           </ul>
//         </li> 
//         <li><Link to="/tshirts">T-shirts</Link></li>
//         <li><Link to="/banner">Banner</Link></li>
//         <li><Link to="/cards">Cards</Link></li>
//         <li><Link to="/multicolor-print">Multicolor Print</Link></li>
//         <li><Link to="/bags">Bags</Link></li>
//       </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
//  import Logo from '../Assets/slogojpg.jpg';


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
     
//           <div className="navbar-logo">
//          <img src={Logo} alt="Logo" className="logo-image" />
//         <span className="logo-text">शब्दाकृती डिझाईन - Shabdakruti Design </span>
//      </div>
//       <ul className="nav-menu">
//         <li><Link to="/">Home</Link></li>

        
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
//         <li><Link to="/products">All Products</Link></li>
                         
//         <li><Link to="/about">About</Link></li>
// <li><Link to="/contact">Contact</Link></li>
//       </ul>

//        {/* ▼ Additional nav menu in next line ▼ */}
//   <ul className="sub-menu">
//     <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
//     <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>
//     {/* <li><Link to="/corporate-gifts">Corporate Gifts</Link></li> */}

// <li className="dropdown">
//   <span className="dropdown-title">Corporate Gifts ▾</span>
//   <ul className="dropdown-menu">
//     <li><Link to="/employee-joining">Employee Joining Kits</Link></li>
//     <li><Link to="/engagement">Employee Engagement Kits</Link></li>
//     <li><Link to="/hampers">Gift Hampers</Link></li>
//     <li><Link to="/recognization">Rewards & Recognition</Link></li>
//     <li><Link to="/accessories">Accessories</Link></li>
//   </ul>
// </li>




//     <li><Link to="/tshirts">T-shirts</Link></li>
//     <li><Link to="/banner">Banner</Link></li>
//     <li><Link to="/cards">Cards</Link></li>
//     <li><Link to="/multicolor-print">Multicolor Print</Link></li>
//     <li><Link to="/bags">Bags</Link></li>


//   </ul>
//     </nav>
//   );
// }

// export default Navbar;

