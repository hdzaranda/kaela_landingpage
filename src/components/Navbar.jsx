import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">
          <img src="/images/logo_kaela.png" alt="Kaela Handmade Store Logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#materials">Materiales</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;