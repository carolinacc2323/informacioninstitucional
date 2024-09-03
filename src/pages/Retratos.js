import React from 'react'
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import ProfileCard from '../components/Retratos/ProfileCard'

import rey2 from '../components/Retratos/fotoretratos/rey2.jpg'; 
import rey1 from '../components/Retratos/fotoretratos/rey1.jpg';
import rey3 from '../components/Retratos/fotoretratos/rey3.jpg'; 
import rey4 from '../components/Retratos/fotoretratos/rey4.jpg';
import rey5 from '../components/Retratos/fotoretratos/rey5.jpg';
 
import reina1 from '../components/Retratos/fotoretratos/reina1.jpg'; 
import reina2 from '../components/Retratos/fotoretratos/reina2.jpg';

import reyes1 from '../components/Retratos/fotoretratos/reyes1.jpg';  
import reyes2 from '../components/Retratos/fotoretratos/reyes2.jpg'; 
import princesa from '../components/Retratos/fotoretratos/princesa.jpg';
import infanta from '../components/Retratos/fotoretratos/infanta.jpg';

const Retratos = () => {
const stylemain ={
  margin: '3em'
}
const styleh1 ={
  fontSize: '30px',
  color: 'black',
  fontFamily: 'Georgia, serif',
}
const styleh2 ={
  color: '#9D6F24',
  fontSize: '20px',
  fontFamily: 'Century Gothic, serif',
}
const stylep ={
  fontSize: '14px',
  fontFamily: 'Century Gothic, serif',
}

  return (
    <>
    <Navbar/>
    <main style={stylemain}>
      <p style={stylep}>NOSOTROS</p>
      <h1 style={styleh1}>RETRATOS DE SS.MM.</h1>
      <h2 style={styleh2}>RETRATOS OFICIALES DE SU MAJESTAD EL REY</h2>
      <div 
      style={{
        display: 'flex',
      }}>
        <ProfileCard 
        backgroundImage={rey1} // Puedes usar cualquier imagen importada
        name="S.M. el Rey"

        />
        <ProfileCard 
        backgroundImage={rey2} // Puedes usar cualquier imagen importada
        name="S.M. el Rey "
        occupation="con indumentaria de gala en el Palacio Real de Madrid"
        />
        </div>
        <div style={{
        display: 'flex',
      }}>
          <ProfileCard 
        backgroundImage={rey3} // Puedes usar cualquier imagen importada
        name="S.M. el Rey "
        occupation="con uniforme de diario de Capitán General del ejército de tierra"
        />
        <ProfileCard 
        backgroundImage={rey4} // Puedes usar cualquier imagen importada
        name="S.M. el Rey "
        occupation="con uniforme de diario de Capitán General de la armada"
        />
        <ProfileCard 
        backgroundImage={rey5} // Puedes usar cualquier imagen importada
        name="S.M. el Rey "
        occupation="con uniforme de diario de Capitán General del Ejército de aire"
        />
        </div>
        

      <h2 style={styleh2}>RETRATOS OFICIALES DE SU MAJESTAD LA REINA</h2>
      <div 
      style={{
        display: 'flex',
      }}>
      <ProfileCard 
        backgroundImage={reina1} // Puedes usar cualquier imagen importada
        name="S.M. la Reina"
         
        />
        <ProfileCard 
        backgroundImage={reina2} // Puedes usar cualquier imagen importada
        name="S.M. la Reina"
        occupation="con indumentaria de gala en el Palacio Real de Madrid"
         
        />
      </div>
      <h2 style={styleh2}>RETRATOS OFICIALES DE SUS MAJESTADES LOS REYES</h2>
      <div style={{
        display: 'flex',
      }}>
      <ProfileCard 
        backgroundImage={reyes1} // Puedes usar cualquier imagen importada
        name="SS.MM los Reyes"
         
        />
        <ProfileCard 
        backgroundImage={reyes2} // Puedes usar cualquier imagen importada
        name="SS.MM los Reyes"
        occupation="con indumentaria de gala en el Palacio Real de Madrid"
        />
      </div>
      <h2 style={styleh2}>RETRATO OFICIAL DE SU ALTEZA REAL LA PRINCESA DE ASTURIAS</h2>
      <div style={{
        display: 'flex',
      }}>
        <ProfileCard
        backgroundImage={princesa} // Puedes usar cualquier imagen importada
        name="S.A.R la Princesa de Asturias"
        />
      </div>
      <h2 style={styleh2}>RETRATO OFICIAL DE SU ALTEZA REAL LA INFANTA DOÑA SOFIA</h2>
      <div style={{
        display: 'flex',
      }}>
        <ProfileCard
        backgroundImage={infanta} // Puedes usar cualquier imagen importada
        name="S.A.R la Infanta Doña Sofia"
        />
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Retratos