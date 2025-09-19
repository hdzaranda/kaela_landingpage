import React from 'react';
import './variables.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection'; // Importa la nueva sección
import MaterialsSection from './components/MaterialsSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection /> {/* Coloca la nueva sección aquí */}
      <MaterialsSection />
      <ProductsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;