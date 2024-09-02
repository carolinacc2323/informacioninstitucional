import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import logoM from '../components/MinisterioPresidencia/imagesMinisterio/logo-header.svg';
import banner from '../components/MinisterioPresidencia/imagesMinisterio/Banner-Bicentenario.jpg';

const Ministerio = () => {
  const styleHeader = {
    backgroundColor: '#FFDB00',
    padding: '3em'
  };
  const barrita ={
    width:'300px',
    height: '100px',
    display: 'flex',
    flexDirection:'column'
  }
  const bRojo ={
    backgroundColor:'#AD1519'
  }
  const bAmarillo ={
    backgroundColor:'#FFC107'
  }
  return (
    <>
      <header style={styleHeader}>
        <Navbar logoSrc={logoM} logoWidth={300} />
      </header>
      <div style={barrita}>
        <div class="franja franja-roja"></div>
        <div class="franja franja-amarilla"></div>
        <div class="franja franja-roja"></div>
      </div>
      <Footer/>
    </>
  );
};

export default Ministerio;