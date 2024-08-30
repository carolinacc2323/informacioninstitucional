import React from 'react'
import Navbar from '../components/Navbar/navbar';


const Conoce = () => {
  const stylemain ={
    margin: '2em',
    height: '80vh',
  }
  const stylep ={
    fontSize:'16px',
    fontFamily: 'Georgia, serif',
    textAlign: 'justify'
  }
  return (
    <>
    <Navbar/>
    <main style={stylemain}>
      <div>
      <p style={{
          fontSize:'18px',
          fontFamily: 'Century Gothic, serif'
        }}>SOBRE PATRIMONIO NACIONAL</p>
        <p style={{
          fontSize:'30px',
          fontFamily: 'Georgia, serif'
        }}>CONOCE NUESTRA HISTORIA</p>
        
      
        <p  style={{
          fontSize:'16px',
          fontFamily: 'Georgia, serif',
          textAlign: 'justify'
        }} className='mt-5'>Patrimonio Nacional es un organismo público regulado por una Ley específica de 1982, Ley 23/1982, de 16 de junio, heredera de una larga serie de disposiciones entre las cuales cabe destacar las leyes de 1865, 1869, 1876, 1932 y 1940, aparte de las ordenanzas anteriores al siglo XIX. En definitiva, esta entidad estatal constituye el núcleo esencial y más importante del antiguo Real Patrimonio, o Patrimonio de la Corona, denominado Patrimonio de la República por la Ley de 1932, y con su nombre actual por las leyes de 1940 y 1982.<br></br><br></br>
          <p style={{
            fontSize:'20px',
            fontFamily: 'Century Gothic, serif',
            color: '#8F6F24'
          }}>DOBLE FUNCIÓN: CONSTITUCIONAL Y CULTURAL</p>
          La función de este organismo público, dependiente del Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática es doble: el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, y la puesta a disposición de los ciudadanos del patrimonio histórico-artístico a través de su uso con fines culturales, científicos y docentes.<br></br>

          Es importante destacar la unidad de sus bienes, ligados por un proceso de creación continuo, especialmente intenso entre el siglo XVI y el XIX, y que ha dado lugar a conjuntos donde las piezas muebles y obras de arte están ligadas a los inmuebles, y todo a la historia política y cultural de España. La coherencia de este conjunto, y las interrelaciones entre espacios, objetos y memoria que en él se producen, otorgan a este Patrimonio su primordial valor cultural e histórico<br></br>
        </p>
        <br></br>
            <p style={{
                  fontSize:'20px',
                  fontFamily: 'Century Gothic, serif',
                  color: '#8F6F24'
                }}>PALACIOS Y ESTACIONES DEL AÑO</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>
          Los reyes, como en la inmensa mayoría de las diferentes cortes europeas de la Edad Moderna, vivían mucho tiempo fuera de la capital. Cada parte del año la pasaban en uno de los Reales Sitios en torno a Madrid: primavera en Aranjuez, verano en Valsaín y La Granja, otoño en El Escorial, invierno en El Pardo y en Madrid. Esta villa era sede oficial de la corte, pero realmente la vida del poder transcurría al ritmo de las estaciones en todos estos escenarios donde a su servicio se aunaban bosques y cazaderos, parques y jardines, palacios, colecciones y urbanismo.
        </p>
        <p style={{
            fontSize:'20px',
            fontFamily: 'Century Gothic, serif',
            color: '#8F6F24'
          }}>DESDE LA EDAD MEDIA HASTA HOY</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>El proceso creativo de este patrimonio se produce desde el principio de la Edad Media y arranca de la definición de los reinos que se fueron definiendo en la Península: una larga serie tanto de palacios como de edificios religiosos vinculados a la respectiva monarquía de cada reino -los reales patronatos, como las Huelgas- jalonan la representatividad de la monarquía en cada uno de los territorios que, como resultado de un largo proceso de uniones dinásticas, terminó por concretarse al inicio de la Edad Moderna en la Monarquía de España. Algunos palacios medievales han subsistido, bien como conventos -Tordesillas-, bien como sedes de la soberanía en la respectiva ciudad capital de cada antiguo reino -la Almudaina en Mallorca-.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>Sobre ese sustrato medieval, la configuración definitiva de los Reales Sitios se produce bajo los Austrias y los Borbones, a partir de la instalación de la capital en Madrid por Felipe II en 1561 y su fundación de El Escorial en 1563. Los bosques, jardines y cultivos, sobre todo en Aranjuez fueron perfeccionados por Felipe V, creador de La Granja de San Ildefonso, y por Fernando VI y Carlos III, que hizo de cada Real Sitio una pequeña ciudad modelo, a la par que ampliaba los palacios. La perfección ornamental de las residencias y de las colecciones reales alcanzó su grado máximo bajo Carlos IV, con aportaciones importantes en el siglo XIX.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>Bajo el reinado de Fernando VII y el fin del antiguo régimen se distingue por primera vez de manera clara entre bienes del Estado y bienes de este conjunto vinculado a la Corona llamado Real Patrimonio.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>Será en 1865, con la primera ley que lo regula, cuando nazca oficialmente la institución "Patrimonio de la Corona" bajo el reinado de Isabel II. Este nuevo régimen jurídico tratará de ajustar todo ese conjunto de bienes patrimoniales, vinculados a la Corona, a la nueva realidad económica, política y social. Diferenciando así entre bienes vinculados a la Corona, que sirven para la representación del poder y para la vida cotidiana de sus majestades, que tienen que seguir unidos, que son del Estado, y entre el patrimonio privado de los monarcas, que procede de los bienes que previamente se consideraban libres, o de su lista civil.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>La Ley de 1932 defendió la unidad de este conjunto de bienes y definió por primera vez la doble función, cultural y representativa, de este "Patrimonio de la República", nombre que se transformó en "Nacional" por la de 1940, que esencialmente sigue el patrón de la anterior. Por tanto, el uso de los palacios para la representación oficial del Jefe del Estado se produjo tanto bajo la Segunda República como durante la dictadura franquista, a la par que se desarrollaba su función cultural.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>La Ley 23/1982, de 16 de junio, del Patrimonio Nacional, norma jurídica que en la actualidad regula esta entidad, reconoce a la institución como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española, y gestor de los derechos de las Reales Fundaciones y Patronatos, y tiene como fines principales el servicio a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, así como la puesta a disposición de los ciudadanos del patrimonio histórico-artístico que gestiona, a través de su uso con fines culturales, científicos y docentes.</p>
        <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'justify'
          }}>La naturaleza diversa de los bienes y la compatibilidad de usos de los mismos hace que la labor de servicio público a la que se debe Patrimonio Nacional sea amplia y compleja. Este singular conjunto integrado de bienes históricos es uno de los más importantes entre los de las antiguas cortes de Europa, y su actual doble uso público, cultural y representativo, es el resultado de un largo proceso histórico, que hace de Patrimonio Nacional una institución única en el mundo.</p>
      </div>
    </main>
    
</>
  )
}

export default Conoce
