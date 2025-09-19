import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Entra a un mundo de creatividad y expresión</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Materiales de Calidad ✨</h3>
            <p>
              Explora una amplia variedad de materiales y herramientas para todos tus proyectos. Desde telas y porcelana fría hasta pinturas y joyas, tenemos todo lo que necesitas para dar vida a tus ideas.
            </p>
          </div>
          <div className="about-card">
            <h3>Talleres y Comunidad 🎨</h3>
            <p>
              Amplía tus habilidades y conecta con otros creativos en nuestros talleres y clases. Únete a nuestra comunidad de artistas y transforma tus pasiones en creaciones tangibles.
            </p>
          </div>
          <div className="about-card">
            <h3>Inspiración Constante 💖</h3>
            <p>
              Descubre innumerables ideas en nuestras redes sociales. Mantente al día con las últimas tendencias de manualidades y encuentra la inspiración para tu próximo proyecto único.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;