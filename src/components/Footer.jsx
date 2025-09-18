import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contacto y Ubicación</h3>
          <p>
            Plaza Galapago Villalucre, piso 1, Local 18<br />
            Panama City, Panama
          </p>
          <p>
            <strong>Whatsapp:</strong> +507 6811-7788
          </p>
        </div>
        <div className="footer-section social-media">
          <h3>Síguenos</h3>
          <a href="https://www.instagram.com/kaelahandmadestore" target="_blank" rel="noopener noreferrer">
            Instagram: @kaelahandmadestore
          </a>
          <a href="https://www.facebook.com/kaelahandmadestore/" target="_blank" rel="noopener noreferrer">
            Facebook: /KaelaHandmadeStore
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kaela Handmade Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;