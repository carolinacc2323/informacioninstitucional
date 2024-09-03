import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import logoM from '../components/MinisterioPresidencia/imagesMinisterio/logo-header.svg';
import banner from '../components/MinisterioPresidencia/imagesMinisterio/Banner-Bicentenario.jpg';
import bolaños from '../components/MinisterioPresidencia/imagesMinisterio/bolaños.jpg';
const Ministerio = () => {
  // Estilos como variables de JavaScript
  const styleHeader = {
    backgroundColor: '#FFDB00',
    padding: '3em',
  };

  const barrita = {
    width: '100%',
    height: '10px',
    display: 'flex',
    flexDirection: 'row',
  };

  const bRojo = {
    backgroundColor: '#AD1519',
    flex: 1,  // Asegura que ocupe un tercio del contenedor
  };

  const bAmarillo = {
    backgroundColor: '#FFC107',
    flex: 2,  // Asegura que ocupe un tercio del contenedor
  };
  const styleBanner ={
    marginTop:'3em',
    justifyContent:'center',
    display:'flex',
    flexDirection:'row',
  }
  const styleBicentenario ={
    width:'700px',
    backgroundColor:'#154481',
    paddingTop:'2em',
    paddingLeft:'2.5em',

  }
  const styleBicentenarioh1 ={
    color:'white',
    fontSize:'25px',
    fontWeight:'bolder'
  }

  const styleBolaños ={
    marginTop:'3em',
    justifyContent:'center',
    display:'flex',
    flexDirection:'row',
    marginBottom:'2em',
  }
  const divTextBolaños ={
    width:'400px',
    backgroundColor:'#616161',
    paddingTop:'2em',
    paddingLeft:'1.5em',
    textAling:'justify',

  }
  const styleBolañosH2 ={
    color:'white',
    fontSize:'22px',
    textDecoration:'underline',
    fontFamily:'OpenSans-Bold, Arial',
    padding:'1em',
    fontWeight:'bolder'
  }
  const styleBolañosP ={
    color:'white',
    fontSize:'15px',
    fontFamily:'OpenSans-Regular, Arial',
    padding:'1em',
  }
  return (
    <>
      <header style={styleHeader}>
        <Navbar logoSrc={logoM} logoWidth={300} />
      </header>
      <div style={barrita}>
        <div style={bRojo}></div>
        <div style={bAmarillo}></div>
        <div style={bRojo}></div>
      </div>
      <div style={styleBanner}>
        <img src={banner} width={300}/>
        <div style={styleBicentenario}>
          <h1 style={styleBicentenarioh1}>Bicentenario del Consejo de Ministros</h1>
        </div>
      </div>
      <div style={styleBolaños}>
        <img src={bolaños} width={600} height='auto'/>
        <div style={divTextBolaños}>
          <h2 style={styleBolañosH2}>Bolaños prepara con el presidente del Consejo General del Notariado la Conferencia de Ministros de Justicia de habla hispana y portuguesa que se celebrará en Tenerife</h2>
          <p style={styleBolañosP}>
          El ministro de la Presidencia, Justicia y Relaciones con las Cortes, Félix Bolaños, se ha reunido con el presidente del Consejo General del Notariado (CGN), José Ángel Martínez Sanchiz.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Ministerio;