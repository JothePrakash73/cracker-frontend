// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      {/* Contact Info */}
      <div className="footer-section">
        <h4>📞 Contact</h4>
        <p>+91 81443 06667</p>
        <p>+91 73051 71319</p>
        <p>📧 umaarunjothe1@gmail.com</p>
      </div>

      {/* Bank Details */}
      <div className="footer-section">
        <h4>🏦 Bank Details</h4>
        <p><strong>A/c Name:</strong> J.ArunKumar</p>
        <p><strong>Bank:</strong> TMB-SRIVILLIPUTTUR</p>
        <p><strong>IFSC:</strong> TMBL0000328</p>
        <p><strong>A/c No:</strong> 328100050305114</p>
      </div>

      {/* GPay + Download */}
      <div className="footer-section qr-section">
        <img src="/images/gpay-qr.png" alt="GPay QR" className="gpay-qr" />
        <p>Scan & Pay</p>
        <a href="/files/pricelist.pdf" download className="download-btn">
          📄 Download Price List
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 Sri Pathrakali Crackers · All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
