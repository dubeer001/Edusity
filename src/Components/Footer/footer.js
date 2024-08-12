import React from 'react';
import './foter.css'; // Ensure the CSS file name is correct

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Educity. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
