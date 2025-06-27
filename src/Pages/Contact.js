import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');

      // 🔄 Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <p>We are here to assist you with all your printing and gifting needs. Feel free to reach out to us through the form below:
         We will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="info-section">
        <h3>Reach Out to Us</h3>
        <ul>
          <li><strong>Address:</strong> Bramhapuri, Maharashtra, India</li>
          <li><strong>Service Area:</strong> Maharashtra</li>
          <li><strong>Mobile:</strong> <a href="tel:07720064226">077200 64226</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/917720061226" target="_blank" rel="noopener noreferrer">+91 77200 61226</a></li>
          <li><strong>Email:</strong> <a href="mailto:infoshbdakruti@gmail.com">infoshbdakruti@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Styles/Contact.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/contact', formData);
//       alert('Message sent successfully!');
//     } catch (err) {
//       alert('Something went wrong!');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="form-section">
//         <h2>Contact Us</h2>
//         <p>We are here to assist you with all your printing and gifting needs. Feel free to reach out to us through the form below:
//          We will get back to you as soon as possible.</p>
//         <form onSubmit={handleSubmit}>
//           <label>Name:</label>
//           <input type="text" name="name" onChange={handleChange} required />

//           <label>Email:</label>
//           <input type="email" name="email" onChange={handleChange} required />

//           <label>Message:</label>
//           <textarea name="message" rows="4" onChange={handleChange} required />

//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       <div className="info-section">
//         <h3>Reach Out to Us</h3>
//         <ul>
//           <li><strong>Address:</strong> Bramhapuri, Maharashtra, India</li>
//           <li><strong>Service Area:</strong> Maharashtra</li>
//           <li><strong>Mobile:</strong> <a href="tel:07720064226">077200 64226</a></li>
//           <li><strong>WhatsApp:</strong> <a href="https://wa.me/917720061226" target="_blank" rel="noopener noreferrer">+91 77200 61226</a></li>
//           <li><strong>Email:</strong> <a href="mailto:infoshbdakruti@gmail.com">infoshbdakruti@gmail.com</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Contact;






// import React from 'react'
// import '../Styles/Contact.css'; // Assuming you have a CSS file for styling

// function Contact() {
//   return (
//     <div className="contact-header">
//       <div className="contact-info">
        
// <h1>Contact Shabdakruti</h1>
// <p>We are here to assist you with all your printing and gifting needs. Feel free to reach out to us through any of the following methods:</p>
// <form action="https://formspree.io/f/xnqvjqwv" method="POST">
//   <label htmlFor="name">Name:</label>
//   <input type="text" id="name" name="name" required />

//   <label htmlFor="email">Email:</label>
//   <input type="email" id="email" name="email" required />

//   <label htmlFor="message">Message:</label>
//   <textarea id="message" name="message" rows="4" required></textarea>

//   <button type="submit">Send Message</button>
// </form>
// </div>
//   <h2>Contact Us</h2>
//   <ul>
//     <li><strong>Address:</strong> Bramhapuri, Maharashtra, India</li>
//     <li><strong>Service Area:</strong> Maharashtra</li>
//     <li><strong>Mobile:</strong> <a href="tel:07720064226">077200 64226</a></li>
//     <li><strong>WhatsApp:</strong> <a href="https://wa.me/917720061226" target="_blank" rel="noopener noreferrer">+91 77200 61226</a></li>
//     <li><strong>Email:</strong> <a href="mailto:infoshbdakruti@gmail.com">infoshbdakruti@gmail.com</a></li>
//   </ul>
// </div>

//   )
// }

// export default Contact;
