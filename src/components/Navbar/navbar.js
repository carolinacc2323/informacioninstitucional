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
        <li><a href='/'>Inicio</a></li>
        <li><a href="/Conoce">Historia</a></li>
        <li><a href="/Consejo">Consejo</a></li>
        <li><a href="/ActosOficiales">Actos</a></li>
        <li><a href="/Retratos">Retratos Oficiales</a></li>
        <li><a href="/Ministerio">Ministerio de la presidencia</a></li>
      </ul>
    </nav>
  );
};

export default Navbar
