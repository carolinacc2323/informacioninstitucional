import React from 'react'
import Navbar from '../components/Navbar/navbar';

const Bienvenida = () => {
  return (
    <>
        <Navbar/>
        <div>
          <br></br>
        <p style={{
                fontSize:'30px',
                fontFamily: 'Georgia, serif'
              }}>
                BIENVENIDA DE LA PRESIDENTA
              </p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif'
              }}>Bienvenidos a Patrimonio Nacional.</p>
              <p style={{
                fontSize:'20px',
                fontFamily: 'Century Gothic, serif',
                color: '#8F6F24'
              }}>ANA DE LA CUEVA, PRESIDENTA DE PATRIMONIO NACIONAL</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones. 
              </p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>
                Ana de la Cueva
                <br></br>
                Presidenta de Patrimonio Nacional
              </p>
        </div>
    </>
  )
}

export default Bienvenida
