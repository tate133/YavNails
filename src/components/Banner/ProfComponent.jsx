import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import image from '../../assets/images/yavlogo.jpeg';

const ProfComponent = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+543624823472'; // número de teléfono para enviar el mensaje por WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank'); // abrir una nueva pestaña con la URL de WhatsApp
  };
  return (
    <Container id="home">
      <Slide direction="right">
        <Profile>
          <img
            src={image}
            alt="profile"
          />
        </Profile>
      </Slide>
      <Slide direction="left">
        <Texts>
          <h4>
            Hola <span className="green">Soy</span>
          </h4>
          <h1 className="green">Clari Nieto</h1>
          <h3>Manicurista</h3>
          <p>
          Soy manicurista recibida en  el instituto de formación y capacitación estética y peluquería en el año 2022. 
          Actualmente sigo capacitandome para ofrecer a mis clientas siempre el mejor servicio y cuidado de sus uñas.
          </p>
          <button onClick={handleWhatsAppClick}>Turnos <BsWhatsapp  style={{marginLeft:'6px'}}  /></button>
          <Social>
            <p>Ingresa a</p>
            <div className="social-icons">
              <span>
                <a href="https://instagram.com/yav.nails">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a>
                  <GiEarthAmerica />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #ebe7de;
    border: none;
    color: #a38b7f;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #a38b7f);
    :hover {
      filter: drop-shadow(0px 10px 10px #e3bba2);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #a38b7f;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    margin-top: 15px;
    width: 35rem;
    filter: drop-shadow(0px 12px 12px #e3bba2);
    :hover {
      filter: drop-shadow(0px 10px 10px #a38b7f);
    }
    transition: transform 400ms ease-in-out;
    
    @media (max-width: 790px) {
      width: 20rem;
      margin-top: -1rem !important;
    }

    @media (max-width: 660px) {
      margin-top: 0;
      width: 14rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
