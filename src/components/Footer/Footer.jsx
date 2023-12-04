import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = '+543624823472'; // número de teléfono para enviar el mensaje por WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank'); // abrir una nueva pestaña con la URL de WhatsApp
  };
  return (
    <>
      <Container id="footer">
        <Profile>
          <Slide direction="left" delay={1}>
            <h1>Yav Nails</h1>
          </Slide>
          <div className="address">
            <Slide direction="left">
              <h1>Localidad:</h1>
            </Slide>
            <Slide direction="left">
              <p>Liliana Castillo de Diaz Carreño, La Rioja</p>
            </Slide>
          </div>
          <div className="links">
            <Slide direction="left">
              <h1>Contactame directamente:</h1>
            </Slide>
            <div>
              <span>
                <FiSmartphone />
              </span>
              <Slide direction="left">
                <a href="tel:+543624823472">+54 3624 823472</a>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <a href="mailto:ramirezj.exequiel@gmail.com">clarinieto11@gmail.com</a>
              </Slide>
            </div>
          </div>
          <div className="profiles">
            <Slide direction="left">
              <h1>Mis redes sociales</h1>
            </Slide>
            <div className="icons">
              <Zoom>
                <span>
                  <a href="https://instagram.com/yav.nails">
                    <BsInstagram />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <BsWhatsapp onClick={handleWhatsAppClick} />
                </span>
              </Zoom>
            </div>
          </div>
          <Fade>
            <ArrowUp onClick={scrollUp}>
              <AiOutlineArrowUp />
            </ArrowUp>
          </Fade>
        </Profile>
        <Form>
          <Slide direction="right">
            <form>
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input type="text" placeholder="Fullname..." />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input type="email" placeholder="Email..." />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea cols="30" rows="10" placeholder="Message..."></textarea>
              </div>
              <button>Submit</button>
            </form>
          </Slide>
        </Form>
      </Container>
        <div className="copyr" style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '10px' }}>&copy;2024 - Exequiel Raimrez</div>
      
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: #a38b7f;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #a38b7f;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #a38b7f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #a38b7f;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
