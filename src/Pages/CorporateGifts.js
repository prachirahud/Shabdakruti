// import React, { useState } from 'react';
// import '../Styles/Navbar.css';
// import corporateGiftsData from '../Data/CorporatGifts'; // Assuming you have a JSON file with the data

// function CorporateGifts() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="corporate-container">
//       <h2 onClick={() => setShowMenu(!showMenu)} className="corporate-title">
//         Corporate Gifts ▾
//       </h2>

//       {showMenu && (
//         <div className="corporate-submenu">
//           {corporateGiftsData.map((section, idx) => (
//             <div key={idx} className="submenu-section">
//               <h4>{section.category}</h4>
//               <ul>
//                 {section.items.map((item, j) => (
//                   <li key={j}><a href="#">{item}</a></li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CorporateGifts;