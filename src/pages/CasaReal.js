import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import logoCR from '../images/imagesCR/logo_escudo.png'
import { StaticImage } from 'gatsby-plugin-image';
import Footer from '../components/Footer/footer';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Portugal from '../images/imagesCR/Portugal.jpg'
import Aniversario from '../images/imagesCR/Aniversario.jpg'
import CongresoDiputados from '../images/imagesCR/CongresoDiputados.jpg'
import Guatemala from '../images/imagesCR/Guatemala.jpg'
import Juramento from '../images/imagesCR/Juramento.jpg'
import Posesion from '../images/imagesCR/Posesion.jpg'
import Reyes from '../images/imagesCR/ReyyPrincesa.jpg'

const items = [
  {
    src: Portugal,
    altText: 'Viaje Oficial a la República Portuguesa',
    caption: 'S.A.R la Princesa de Asturias',
    key: 1,
  },
  {
    src: Reyes,
    altText: 'Entrega de Reales Despachos de Empleo en la Academia General Militar',
    caption: 'SS.MM los Reyes y SS.AA.RR la Princesa de Asturias y la Infanta Doña Sofía',
    key: 2,
  },
  {
    src: Posesion,
    altText: 'Asistencia a la Toma de Posesión del Presidente electo de la República de Panamá, S.E. José Raúl Mulino Quintero',
    caption: 'S.M el Rey',
    key: 3,
  },
  {
    src: Aniversario,
    altText: 'Imposición de condecoracions de la Orden del Mérito Civil con motivo del X aniversario de la Proclamación de Su Majestad el Rey',
    caption: 'SS.MM. lo Reyes y SS.AA.RR la Princesa de Asturias y la Infanta Doña Sofía',
    key: 4,
  },
  {
    src: Guatemala,
    altText: 'Viaje de Cooperación a l aRepública de Guatemala',
    caption: 'S.M la Reina',
    key: 5,
  },
  {
    src: Juramento,
    altText: 'Acto del juramento de la Constitución Española por Su Alteza Real la Princesa de Asturias ante las Cortes Generales',
    caption: 'SS.MM. lo Reyes y SS.AA.RR la Princesa de Asturias y la Infanta Doña Sofía',
    key: 6,
  },
  {
    src: CongresoDiputados,
    altText: 'Actos con motivo de la Sesión Solemne de Juramento y Proclamación de Su Majestad el Rey Don Felipe VI antes las Cortes Generales',
    caption: 'Palacio de La Zarzuela, Congreso de los Diputados y Palacio Real de Madrid, 19.06.2014',
    key: 7,
  }
];

function CasaReal(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const stylemain = {
    margin: '3em',
    height: '51vh',
  };
  const styleimg = {
    textAlign: 'center',
  }
  const stylediv ={
    textAlign: 'center',
  }
  return (
    <>
      <Navbar logoSrc={logoCR} logoWidth={400}/>
      <br></br>
      <div style={styleimg}>
        <StaticImage src='../images/imagesCR/casareal.jpg' width={1000}/>
        </div>
        <main style={stylemain}>
          <div style={stylediv}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{fontFamily: 'Georgia, serif'}}>
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </Carousel>
            </div>
        </main>
      <Footer />
    </>
  );
}

export default CasaReal;
