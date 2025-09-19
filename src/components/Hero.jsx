import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importa los íconos
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Kaela Handmade Store</h1>
        <p>Tu creatividad, nuestra pasión. Descubre materiales únicos para tus manualidades.</p>
        <div className="cta-buttons">
          {/* Botón de WhatsApp */}
          <a href="https://wa.me/50768117788" target="_blank" rel="noopener noreferrer" className="cta-button whatsapp">
            <FaWhatsapp /> Contáctanos
          </a>
          {/* Botón de Instagram */}
          <a href="https://www.instagram.com/kaelahandmadestore" target="_blank" rel="noopener noreferrer" className="cta-button instagram">
            <FaInstagram /> Ver Productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;