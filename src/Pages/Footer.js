import React from 'react';
import '../Styles/Footer.css'; // Link your CSS file
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p><FaPhoneAlt /> +91 77200 64226</p>
        <p><FaPhoneAlt /> +91 77200 61226 (WhatsApp)</p>
        <p><FaEnvelope /> infoshbdakruti@gmail.com</p>
        <p>Bramhapuri, Maharashtra, India</p>
      </div>

      <div className="footer-section social">
        <h4>Follow Us</h4>
      <div className="social-icons">
  <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://fontawesome.com/icons/square-x-twitter?f=brands&s=solid" className="twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
</div>
      </div>

      <div className="footer-section copyright">
        <p>© {new Date().getFullYear()} Shabdakruti. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
