// ... (código anterior)
import './MaterialsSection.css';
const MaterialsSection = () => {
  return (
    <section id="materials" className="materials-section">
      <h2 className="section-title">Materiales de Sedería</h2>
      <p className="section-subtitle">
        Encuentra todo lo que necesitas para dar vida a tus ideas.
      </p>
      <div className="materials-grid">
        <div className="material-item">
          <img src="/images/materials/cintas2.jpg" alt="Cintas estampadas" className="item-image" />
          <h3>Cintas y Telas</h3>
          <ul>
            <li>Cintas de gross y satén</li>
            <li>Cinta elástica Glitter</li>
            <li>Cuerinas para lazos</li>
          </ul>
        </div>
        <div className="material-item">
          <img src="/images/materials/bisuteria.jpg" alt="Materiales de bisutería" className="item-image" />
          <h3>Materiales de Bisutería</h3>
          <ul>
            <li>Materiales y herramientas</li>
            <li>Hilos para bisutería y macramé</li>
            <li>Bases de acrílico para llaveros</li>
          </ul>
        </div>
        {/* ... (agrega imágenes a los demás items) */}
      </div>
    </section>
  );
};

export default MaterialsSection;