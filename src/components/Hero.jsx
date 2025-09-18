import React from 'react';
import './Hero.css'; // Importaremos los estilos aquí

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Kaela Handmade Store</h1>
        <p>Tu creatividad, nuestra pasión. Descubre materiales únicos para tus manualidades.</p>
        <button className="cta-button">Ver productos</button>
      </div>
    </section>
  );
};

export default Hero;