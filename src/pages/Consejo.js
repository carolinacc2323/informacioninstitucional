import React from 'react'
import Navbar from '../components/Navbar/navbar';
import { StaticImage } from 'gatsby-plugin-image';
import TeamCard from '../components/TeamConsejo/TeamCard';
import gerenteImage from '../images/gerente1.jpg';

const Consejo = () => {
  return (
    <>
    <Navbar/>
    <TeamCard
      title="MARÍA DOLORES MENÉNDEZ COMPANY"
      description="GERENTE DE PATRIMONIO NACIONAL"
      image={gerenteImage}
      text="Buy Now"
    />
    <StaticImage src='../images/gerente1.jpg'/>
        <p style={{
            fontSize:'18px',
            fontFamily: 'Century Gothic, serif'
          }}>SOBRE PATRIMONIO NACIONAL</p>
          <p style={{
            fontSize:'30px',
            fontFamily: 'Georgia, serif'
          }}>CONSEJO DE ADMINISTRACIÓN</p>
          <p style={{
            fontSize:'20px',
            fontFamily: 'Century Gothic, serif',
            color: '#8F6F24'
          }}>MIEMBROS NATOS</p>
          <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif',
            fontWeight: 'bolder'
          }}>ANA DE LA CUEVA FERNÁNDEZ</p>
          <p style={{
            fontSize:'16px',
            fontFamily: 'Georgia, serif'
          }}>PRESIDENTA DE PATRIMONIO NACIONAL</p>
              <p  style={{
                  fontSize:'16px',
                  fontFamily: 'Georgia, serif',
                  textAlign: 'justify'
                }} className='mt-4'>Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.</p>
                <p style={{
                  fontSize:'16px',
                  fontFamily: 'Georgia, serif',
                  textAlign: 'justify'
                }}>Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.</p>
                <p style={{
                  fontSize:'16px',
                  fontFamily: 'Georgia, serif',
                  textAlign: 'justify'
                }}>Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos.</p>
                <p style={{
                  fontSize:'16px',
                  fontFamily: 'Georgia, serif',
                  textAlign: 'justify'
                }}>Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.</p>
                <p style={{
                  fontSize:'16px',
                  fontFamily: 'Georgia, serif',
                  textAlign: 'justify'
                }}>Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.</p>
                <br></br>
                <p style={{
              fontSize:'16px',
              fontFamily: 'Georgia, serif',
              fontWeight: 'bolder'
            }}>MARÍA DOLORES MENÉNDEZ COMPANY</p>
            <p style={{
              fontSize:'16px',
              fontFamily: 'Georgia, serif'
            }}>GERENTE DE PATRIMONIO NACIONAL</p>
            <TeamCard
              title="MARÍA DOLORES MENÉNDEZ COMPANY"
              description="GERENTE DE PATRIMONIO NACIONAL"
              image={gerenteImage}
              text="Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid."
            />
            <p style={{
            fontSize:'20px',
            fontFamily: 'Century Gothic, serif',
            color: '#8F6F24'
          }}> CONSEJEROS</p>
            
            <p style={{
              fontSize:'16px',
              fontFamily: 'Georgia, serif',
              fontWeight: 'bolder'
            }}>ANA MARÍA ARIAS DE COSSÍO</p>
             
              <p  style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }} className='mt-4'>Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Ha desempeñado una amplia actividad investigadora, con 6 sexenios de investigación reconocidos por la Comisión Nacional Evaluadora. Cuenta en su haber con publicaciones sobre estudios de pintura y sobre historia intelectual referida a la Institución Libre de Enseñanza y a Manuel B. Cossío. También ha realizado estudios sobre escenografía teatral, ha publicado 14 libros individuales y 10 con otros autores, numerosos artículos en revistas especializadas y participado en ponencias a congresos.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Cuenta con una reconocida trayectoria vinculada a los organismos de conservación del arte. Es académica de la Real Academia de Bellas Artes de Santa Isabel de Hungría de Sevilla y de la Real Academia Canaria de Bellas Artes de San Miguel Arcángel.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Es presidenta de la Fundación Jiménez-Cossío.</p>
            
            <p style={{
              fontSize:'16px',
              fontFamily: 'Georgia, serif',
              fontWeight: 'bolder'
            }}>FRANCISCO BELIL CREIXELL</p>
              
              <p className='mt-4' style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Ingeniero Superior en la Universidad Politécnica de Cataluña.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Amplió sus estudios de ingeniería en la Universidad de Pittsburgh (EE.UU.) e INSEAD, en Fontainebleau (Francia). En julio de 1972 ingresó en Bayer AG, desempeñando diversas funciones en las fábricas alemanas de Leverkusen, Dormagen y Uerdingen. En 1978 fue destinado a Mobay en USA, donde trabajó en la central de Pittsburgh y la fábrica de New Martinsville. En 1981, fue nombrado Director en el Grupo Bayer de México hasta julio de 1987.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>El 1 de abril de 1996 fue nombrado Consejero Delegado de Bayer Hispania, S.A., máximo responsable del Grupo España y en 1997 del Grupo Bayer en la Región Iberia (España y Portugal). El 1 de agosto de 2006, se incorporó a Siemens, S.A. como Vicepresidente y Consejero Delegado. En abril de 2008 fue nombrado CEO de la Región Suroeste de Europa, formada por 15 países. En junio de 2013 fue nombrado Vicepresidente de la Fundación Bertelsmann. En julio de 2015, Presidente de la Fundación Princesa de Girona.</p>
              <p style={{
                fontSize:'16px',
                fontFamily: 'Georgia, serif',
                textAlign: 'justify'
              }}>Otros cargos que ha desempeñado: 2000-2006 Presidente de FEIQUE; 2005-2010 Presidente de la Cámara de Comercio alemana para España · Vicepresidente de la Fundación CEDE · Vicepresidente Alumni UPC; Consejos de Administración/ Consejos Asesores: Naturgy, Linde, Uriach, KPMG, Caixabank Banca Privada, APD, Foment, CEOE; 2010 Cruz de Caballero de la Orden del Mérito de la República Federal de Alemania · 1999 "Directivo del año" AED; 2011 Premio a la Excelencia Empresarial por la Cámara Alemana de Comercio; 2017 Encomienda con placa de la Orden Civil de Alfonso X el Sabio en el ámbito de educación.</p>
    </>
  )
}

export default Consejo
