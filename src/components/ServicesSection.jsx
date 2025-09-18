import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Servicios que ofrecemos</h2>
      <p className="section-subtitle">
        Facilitamos tus proyectos y te brindamos las herramientas para crear.
      </p>
      <div className="services-grid">
        <div className="service-item">
          <h3>Cursos y Personalización</h3>
          <ul>
            <li>Cursos de manualidades</li>
            <li>Servicio de plotter de corte</li>
            <li>Personalización de suéteres, tazas y vasos</li>
          </ul>
        </div>
        <div className="service-item">
          <h3>Otros Servicios</h3>
          <ul>
            <li>Venta de Café y Helado</li>
            <li>Copias e impresiones (B/N y a color)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;