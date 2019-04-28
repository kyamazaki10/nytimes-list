import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a href="https://developer.nytimes.com/">
        <img
          src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1539041465000"
          alt="Data provided by The New York Times" />
      </a>
    </div>
  );
}

export default Footer;
