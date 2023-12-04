import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import image from '../../assets/images/nails3.jpeg';
import image2 from '../../assets/images/nails4.jpeg';
import image4 from '../../assets/images/nails1.jpeg';
import image3 from '../../assets/images/nails2.jpeg';
import image5 from '../../assets/images/nails5.jpeg';

let data = [
  {
    img: image,
    disc: "",
  },
  {
    img: image2,
    disc: "",
  },
  {
    img: image3,
    disc: "",
  },
  {
    img: image5,
    disc: "",
  },
  {
    img: image4,
    disc: "",
  },
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
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openDemo = (image) => {
    console.log('Clic en la imagen:', image);
    setSelectedImage(image);
  };

  const closeDemo = () => {
    setSelectedImage(null);
  };

  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project
      item={item}
      key={i}
      onClick={() => openDemo(item.img)}
    />
  ));

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'
        >
          <IoIosArrowForward />
        </button>
      </Buttons>

      {selectedImage && (
        <LargeImageContainer onClick={closeDemo}>
          <LargeImageContent>
            <img src={selectedImage} alt="Demo" />
            <CloseButton onClick={closeDemo}>Cerrar</CloseButton>
          </LargeImageContent>
        </LargeImageContainer>
      )}
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #a38b7f;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;

const LargeImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LargeImageContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 5px;
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #01be96;
  color: #fff;
  border: none;
  border-radius: 5px;
`;