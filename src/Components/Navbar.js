// // Navbar.js
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';
// import Logo from '../Assets/slogojpg.jpg';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [drawerContent, setDrawerContent] = useState(null);
//   const drawerRef = useRef();


  
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (drawerRef.current && !drawerRef.current.contains(event.target)) {
//         setDrawerContent(null);
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
//         <li onClick={() => setDrawerContent({
//           title: "Services",
//           links: [
//             { label: "Printing Services", to: "/services/printing" },
//             { label: "Graphic Design", to: "/services/design" },
//             { label: "Corporate Gifts", to: "/services/gifts" },
//             { label: "Custom Orders", to: "/services/custom" },
//           ]
//         })}>
//           <span className="dropdown-title">Services ▸</span>
//         </li>
//         <li><Link to="/products">All Products</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>

//       <div className="sub-menu-wrapper">
//         <ul className={`sub-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//           <li><Link to="/awards-certificates">Awards & Certificates</Link></li>
//           <li><Link to="/cutomizedgifts">Customized Gifts</Link></li>
//           <li onClick={() => setDrawerContent({
//             title: "Corporate Gifts",
//             links: [
//               { label: "Employee Joining Kits", to: "/employee-joining" },
//               { label: "Employee Engagement Kits", to: "/engagement" },
//               { label: "Gift Hampers", to: "/hampers" },
//               { label: "Rewards & Recognition", to: "/recognization" },
//               { label: "Accessories", to: "/accessories" },
//             ]
//           })}>
//             <span className="dropdown-title">Corporate Gifts ▸</span>
//           </li>
//           <li><Link to="/tshirts">T-shirts</Link></li>
//           <li><Link to="/banner">Banner</Link></li>
//           <li><Link to="/cards">Cards</Link></li>
//           <li><Link to="/multicolor-print">Multicolor Print</Link></li>
//           <li><Link to="/bags">Bags</Link></li>
//         </ul>
//       </div>

//       {drawerContent && (
//         <div className="drawer-overlay" onClick={() => setDrawerContent(null)}>
//           <div className="drawer" ref={drawerRef} onClick={(e) => e.stopPropagation()}>
//             <h3 className="drawer-title">{drawerContent.title}</h3>
//             <ul className="drawer-menu">
//               {drawerContent.links.map((link, i) => (
//                 <li key={i}>
//                   <Link to={link.to} onClick={() => setDrawerContent(null)}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import Logo from '../Assets/slogojpg.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true); // NEW STATE
  const drawerRef = useRef();
  const location = useLocation();

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerContent(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show navbar again on route change (e.g., page reload or next menu open)
  useEffect(() => {
    setShowNavbar(true);
    setIsMobileMenuOpen(false);
    setDrawerContent(null);
  }, [location]);

  const handleDrawerLinkClick = () => {
    if (window.innerWidth <= 992) {
      setShowNavbar(false); // HIDE NAVBAR after drawer menu click
    }
  };

  if (!showNavbar && window.innerWidth <= 992) return null; // Hide navbar on mobile if state is false

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
                  <Link to={link.to} onClick={handleDrawerLinkClick}>
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
