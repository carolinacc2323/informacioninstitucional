import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './navbar.css';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
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
      <div className="logo"><StaticImage src='../images/logopatri.jpg'/></div>
      <ul className="nav-links">
        <li><Link to="/Bienvenida">Inicio</Link></li>
        <li><Link to="/Conoce">Historia</Link></li>
        <li><Link to="/Consejo">Consejo</Link></li>
        <li><Link to="/ActosOficiales">Actos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar
