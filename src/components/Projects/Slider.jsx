import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import image from '../../assets/images/proyect-clubesRiojanos.jpg';
import image2 from '../../assets/images/proyect-pokeAPI.jpg';
import image4 from '../../assets/images/proyect-redSocial.jpg';
import image3 from '../../assets/images/proyect-php.jpg';

let data = [
    {
        img : image,
        disc : "Integrador Final del Polo de La Rioja. Se consume Base de Datos MongoDB y se renderiza en el front con React. APIrest realizada con Node.js y Express. Geolocalizador con LeafLet para ubicar los clubes.",
        demo : "https://github.com/tate133/ProyectoFinalWeb-PoloLaRioja"
    },
    {
        img : image2,
        disc : "Realizado en Polo Tecnológico de La Rioja. Se consume una API de la web PokeApi y se la renderiza con React-ReactMUI en el front. Ademas la web contiene un componente para listar, crear, editar y borrar tareas.",
        demo : "https://github.com/tate133/pilar-web/tree/tp3"
    },
    {
        img : image3,
        disc : "Pagina web con registro y login de usuarios, los cuales pueden crear, editar o borrar datos relacionados a videjuegos. Desarrollado en PHP, Css3, Html5 y conexion a Base de Datos MySQL.",
        demo : "https://www.youtube.com/watch?v=z4yl7AM3tT0"
    },
    {
        img : image4,
        disc : "Pagina web adaptable a distintas pantallas, clon de red social. Desarrollada con Html5, Css3, Bootstrap y JavaScript.",
        demo : "https://tate133.github.io/redSocial/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`