import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <p>&copy; {currentYear} Bunrong Vyrom. All rights reserved.</p>
    </footer>
  );
};

export default Footer;