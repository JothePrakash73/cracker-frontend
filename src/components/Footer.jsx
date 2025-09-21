// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="contact-info">
        <h4>Contact</h4>
        <p>Phone: +91 8144306667</p>
        <p>Phone: +91 7305171319</p>
        <p>Email: umaarunjothe1@gmail.com</p>
      </div>
      <div className="bank-details">
        <h4>Bank Details</h4>
        <p>A/c Name J.ArunKumar</p>
        <p>Bank Name : TMB-SRIVILLIPUTTUR</p>
        <p>IFSC Code: TMBL0000328</p>
        
        <p>A/c Number: 328100050305114</p>
      </div>
      <div className="gpay-qr-container">
        <img src="/images/gpay-qr.png" alt="GPay QR" className="gpay-qr" />
        <p>Scan & Pay</p>
      </div>
    </div>
    <p className="footer-copy">&copy; 2025 Sri Pathrakali Crackers.All Rights Reserved.</p>
  </footer>
);

export default Footer;
