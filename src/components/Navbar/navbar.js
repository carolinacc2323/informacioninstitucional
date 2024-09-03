import React, { useState, useEffect } from 'react';
import './navbar.css';
import defaultLogo from "./logo.png";

const Navbar = ({ logoSrc = defaultLogo, logoWidth = 100 }) => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${navbarBackground ? 'navbar-background' : ''}`}>
      <div className="logo">
        <img src={logoSrc} width={logoWidth} alt="Logo" />
      </div>
      <ul className="nav-linkes">
        <li><a href='/'>INICIO</a></li>
        <li><a href="/Conoce">NUESTRA HISTORIA</a></li>
        <li><a href="/Consejo">CONSEJO DE ADMINISTRACION</a></li>
        <li><a href="/ActosOficiales">ACTOS OFICIALES E INSTITUCIONALES</a></li>
        <li><a href="/CasaReal">CASA DE S.M. el Rey</a></li>
        <li><a href="/Retratos">RETRATOS OFICIALES</a></li>
        <li><a href="/Ministerio">MINISTERIO DE LA PRESIDENCIA</a></li>
      </ul>
    </nav>
  );
};

export default Navbar
