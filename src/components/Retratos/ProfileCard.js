import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './profileCard.css';
import defaultImage from './fotoretratos/logoblanco.png'; // Ajusta la ruta según tu estructura

const ProfileCard = ({ 
  backgroundImage = defaultImage, // Valor predeterminado si no se pasa ninguna imagen
  name = "",          // Nombre predeterminado
  occupation = "", // Ocupación predeterminada
  socialLinks = []                // Links predeterminados (array vacío)
}) => {
  return (
    <div className="wrapper">
      <div 
        className="profile" 
        style={{ backgroundImage: `url(${backgroundImage})` }} // Usa la imagen pasada como prop o la predeterminada
      >
        <div className="overlay">
          <div className="about d-flex flex-column">
            <h4>{name}</h4> 
            <span style={{
              width: '70%'
            }}>{occupation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard