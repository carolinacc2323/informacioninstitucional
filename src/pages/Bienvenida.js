import React from 'react'
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { StaticImage } from 'gatsby-plugin-image';

const Bienvenida = () => {
  const stylemain ={
    margin: '3em',
    height: '115vh',
  }
  const styleh1 ={
    fontSize:'30px',
    fontFamily: 'Georgia, serif'
  }
  const styleh4 ={
    fontSize:'20px',
    fontFamily: 'Century Gothic, serif',
    color: '#8f6f24',
  }
  const stylep ={
    fontSize:'16px',
    fontFamily: 'Georgia, serif',
    textAlign: 'justify',
  }
  const stylep1 ={
    fontSize:'14px',
    fontFamily: 'Georgia, serif',
  }
  return (
    <>
        <Navbar/>
        <main style={stylemain}>
          <p style={stylep1}>SOBRE PATRIMONIO NACIONAL</p>
          <h1 style={styleh1}>BIENVENIDA DE LA PRESIDENTA</h1>
          <br></br>
          <div >
            <StaticImage src='../images/AnaCueva.jpeg' width={600} height={400} />
          </div>
          <p style={styleh4}>ANA DE LA CUEVA, PRESIDENTA DE PATRIMONIO NACIONAL</p>
          <p style={stylep}>Bienvenidos a Patrimonio Nacional.</p>
          
          <p style={stylep}>Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.</p>
          <p style={stylep}>Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones.</p>
          <p style={stylep}>Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.</p>
          <p style={stylep}>
            Ana de la Cueva
            <br></br>
            Presidenta de Patrimonio Nacional
          </p>
        </main>
        <Footer/>
    </>
  )
}

export default Bienvenida
