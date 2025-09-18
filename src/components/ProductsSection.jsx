import React from 'react';
import './ProductsSection.css';

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <h2 className="section-title">Productos Personalizados y más</h2>
      <p className="section-subtitle">
        Diseños únicos para tus celebraciones, regalos y negocio.
      </p>
      <div className="products-grid">
        <div className="product-item">
          <img src="/images/products/personalizado.jpg" alt="Regalos personalizados" className="item-image" />
          <h3>Regalos Personalizados</h3>
          <ul>
            <li>Tazas, vasos y llaveros personalizados</li>
            <li>Recordatorios de acrílico y con imán para eventos</li>
            <li>Suéteres personalizados</li>
          </ul>
        </div>
        <div className="product-item">
          <img src="/images/products/publicitario.jpg" alt="Artículos Publicitarios" className="item-image" />
          <h3>Artículos Publicitarios</h3>
          <ul>
            <li>Displays para mesa con redes sociales</li>
            <li>Displays para lazos con logo personalizado</li>
            <li>Reconocimientos y trofeos de acrílico</li>
          </ul>
        </div>
        <div className="product-item">
          <img src="/images/products/lazos.jpg" alt="Accesorios y Más" className="item-image" />
          <h3>Accesorios y Más</h3>
          <ul>
            <li>Lazos y vinchas</li>
            <li>Joyería de fantasía</li>
            <li>Bolsas para regalo y globos</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;