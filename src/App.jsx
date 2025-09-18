import React from 'react';
import './variables.css'; // Importa las variables CSS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MaterialsSection from './components/MaterialsSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer'; // Importa el nuevo componente

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MaterialsSection />
      <ProductsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;