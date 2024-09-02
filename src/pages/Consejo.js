import React from 'react'
import Navbar from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";
import { StaticImage } from 'gatsby-plugin-image';
import TeamCard from '../components/TeamConsejo/TeamCard';
import Ana from '../components/TeamConsejo/ImagesTeam/Ana.jpg'
import Maria from '../components/TeamConsejo/ImagesTeam/MariaDolores.jpg'
import AnaM from '../components/TeamConsejo/ImagesTeam/AnaMaria.jpg'
import Francisco from '../components/TeamConsejo/ImagesTeam/FranciscoBelil.jpg'
import MAngeles from '../components/TeamConsejo/ImagesTeam/MAngeles.jpg'
import Alberto from '../components/TeamConsejo/ImagesTeam/AlbertoHerrera.jpg'
import MCarmen from '../components/TeamConsejo/ImagesTeam/MCarme.jpg'
import Gregorio from '../components/TeamConsejo/ImagesTeam/GregorioMara.jpg'
import Judit from '../components/TeamConsejo/ImagesTeam/JuditAlex.jpg'
import JoseL from '../components/TeamConsejo/ImagesTeam/JoseLuis.jpg'
import Domingo from '../components/TeamConsejo/ImagesTeam/DomingoMartinez.jpg'
import Javier from '../components/TeamConsejo/ImagesTeam/JavierSolana.jpg' 
import Juan from '../components/TeamConsejo/ImagesTeam/JuanTejedor.jpg'
import MariaP from '../components/TeamConsejo/ImagesTeam/MariaPerez.jpg'
import Samuel from '../components/TeamConsejo/ImagesTeam/SamuelAlonso.jpg'
import Tomas from '../components/TeamConsejo/ImagesTeam/TomasSuarez.jpeg'


const Consejo = () => {
  const stylemain ={
    margin: '2em'
  }
  const styleh1 ={
    fontSize:'30px',
    fontFamily: 'Georgia, serif'
  }
  const styleh2 ={
    fontSize:'20px',
    fontFamily: 'Century Gothic, serif',
    color: '#8F6F24'
  }
  const styleh3 ={
    fontSize:'18px',
    fontFamily: 'Century Gothic, serif'
  }
  const styleh4 ={
    fontSize:'16px',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bolder'
  }
  const stylep ={
    fontSize:'16px',
    fontFamily: 'Georgia, serif',
    textAlign: 'justify'
  }
  const divpresi ={
    display: 'grid',
    gridTemplateColumns: '.3fr 1fr',
    gap: '20px'
  }
  const divsecre ={
    display: 'grid',
    gridTemplateColumns: '0.2fr 1fr',
    gap: '20px'
  }
  return (
    <>
    <Navbar/>
    <main style={stylemain}>
      <h3 style={styleh3}>SOBRE PATRIMONIO NACIONAL</h3>
      <h1 style={styleh1}>CONSEJO DE ADMINISTRACIÓN</h1>
      <h2 style={styleh2}>MIEMBROS NATOS</h2>
          <h4 style={styleh4}>ANA DE LA CUEVA FERNÁNDEZ</h4>
          <p style={stylep}>PRESIDENTA DE PATRIMONIO NACIONAL</p>
          <div style={divpresi}>
            <img src={Ana} width={700} height={400}/>
            <div>
              <p  style={stylep} className='mt-4'>Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.</p>
              <p style={stylep}>Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.</p>
              <p style={stylep}>Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos.</p>
              <p style={stylep}>Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.</p>
              <p style={stylep}>Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.</p>
            </div>
          </div>
          <h4 style={styleh4}>MARÍA DOLORES MENÉNDEZ COMPANY</h4>
          <p style={stylep}>GERENTE DE PATRIMONIO NACIONAL</p>
          <div style={divsecre}>
          <img src={Maria} width={200} height={200}/>
          <div>
          <p  style={stylep} className='mt-4'>
              Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. Funcionaria en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad, Executive Master in Public Administration (EMPA). ESADE.
              <p style={stylep}>Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.</p>
              <p style={stylep}>Miembro del Consejo de Administración del Centro para el Desarrollo Tecnológico Industrial E.P.E. (CDTI).</p>
            </p>
          </div>
          </div>

            <p style={styleh2}> CONSEJEROS</p>
          <div className='consejo' style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
          }}>
            <div>
              <TeamCard
                title="ANA MARÍA ARIAS DE COSSÍO"
                description="Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid"
                image={AnaM}
                text=""
              />
            </div>
            <div>
              <TeamCard
                title="FRANCISCO BELIL CREIXELL"
                description="Ingeniero Superior en la Universidad Politécnica de Cataluña"
                image={Francisco}
                text=""
              />
            </div>
            <div>
              <TeamCard
                title="Mª ÁNGELES HERMOSILLA ÁLVAREZ"
                description="Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba"
                image={MAngeles}
                text=""
              />
            </div>
            <div>
              <TeamCard
                title="ALBERTO HERRERA RODRÍGUEZ"
                description="Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes"
                image={Alberto}
                text=""
              />
            </div>
            <div>
              <TeamCard
                title="MARÍA DEL CARMEN IGLESIAS CANO"
                description="Directora de la Real Academia de la Historia desde diciembre de 2014 (reelegida en 2018)"
                image={MCarmen}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="GREGORIO MARAÑÓN Y BERTRÁN DE LIS"
                description="Presidente del Teatro Real y de la Fundación Ortega-Marañón."
                image={Gregorio}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="JUDIT ALEXANDRA GONZÁLEZ PEDRAZ"
                description="Secretaria general de la Presidencia del Gobierno"
                image={Judit}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS"
                description="Alcalde de Madrid"
                image={JoseL}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="DOMINGO MARTÍNEZ PALOMO"
                description="Secretario general de la Casa de su Majestad el Rey"
                image={Domingo}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="JAVIER SOLANA DE MADARIAGA"
                description="Doctor en Ciencias Físicas y catedrático por la Universidad Complutense de Madrid"
                image={Javier}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="JUAN TEJEDOR CARNERO"
                description="Licenciado en Ciencias Económicas y Empresariales por la Universidad Complutense de Madrid y funcionario del Cuerpo Superior de Interventores y Auditores del Estado"
                image={Juan}
                text=""
              />
            </div>
            <div>
              <TeamCard
                title="MARÍA PÉREZ SÁNCHEZ-LAULHÉ"
                description="Licenciada en Derecho por la Universidad Pontificia de Comillas (ICADE). Curso de Posgrado (Título de Experto) en Gestión Cultural en el Exterior por la Universidad Carlos III de Madrid (coorganizado por la AECID)"
                image={MariaP}
                text=""
              />
            </div>
            <div >
              <TeamCard
                title="SAMUEL ALONSO LLORENTE"
                description="Maestro de Educación primaria"
                image={Samuel}
                text=""
              />
            </div>
          </div>

          <p style={styleh2}> SECRETARIO</p>
          <TeamCard
              title="TOMÁS SUÁREZ-INCLÁN GONZÁLEZ"
              description="Abogado del Estado (1992) y abogado del Estado Jefe en Patrimonio Nacional. Marzo 2019"
              image={Tomas}
              text=""
            />
    </main>
        
        <Footer/>
    </>
  )
}

export default Consejo