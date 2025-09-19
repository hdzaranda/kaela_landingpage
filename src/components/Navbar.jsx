import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importamos los íconos
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero" onClick={() => setIsOpen(false)}> {/* Cierra el menú si se hace clic en el logo */}
          <img src="/images/logo_kaela.png" alt="Kaela Handmade Store Logo" />
        </a>
      </div>

      {/* Ícono de hamburguesa/X (visible solo en móvil) */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Enlaces del menú (se muestra como lista en escritorio, como menú desplegable en móvil) */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>Acerca</a></li>
        <li><a href="#materials" onClick={() => setIsOpen(false)}>Materiales</a></li>
        <li><a href="#products" onClick={() => setIsOpen(false)}>Productos</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Servicios</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;