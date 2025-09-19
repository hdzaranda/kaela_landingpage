import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        {/* Sección de Logo y Horarios */}
        <div className="footer-section footer-brand">
          <img src="/images/logo_kaela.png" alt="Kaela Handmade Store Logo" className="footer-logo" />
          <div className="footer-hours">
            <h3>Horario de Atención</h3>
            <p>Lunes a viernes: 10:00 am - 5:00 pm</p>
            <p>Sábados: 11:00 am - 4:00 pm</p>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section contact-info">
          <h3>Contáctanos</h3>
          <p>
            Plaza Galapago Villalucre, piso 1, Local 18<br />
            Panama City, Panama
          </p>
          <a href="https://wa.me/50768117788" target="_blank" rel="noopener noreferrer" className="social-link whatsapp-link">
            <FaWhatsapp className="social-icon" />
            <span>WhatsApp: +507 6811-7788</span>
          </a>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section social-media">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/kaelahandmadestore" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/kaelahandmadestore/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook className="social-icon" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        
        {/* Nueva sección de Mapa con contenedor responsive */}
        <div className="footer-section footer-map">
          <h3>Nuestra Ubicación</h3>
          <div className="map-responsive">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2841901067027!2d-79.48392111499753!3d9.037819965723038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca90073a5b0e5%3A0xf1e2e41bb5c069fd!2sKaela%20HandMade%20Store!5e0!3m2!1ses!2sus!4v1758255439950!5m2!1ses!2sus"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kaela Handmade Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;