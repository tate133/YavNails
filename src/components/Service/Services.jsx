import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Sobre <span className="green">mí</span>
        </h4>
        <h1>Mis pilares</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaHeart}
            title={"Semipermanente"}
            disc={`La semi mantiene tus manos siempre listas y arregladas en pocas horas, 
            tiene una duracion de 15 a 20 dias dependiendo del cuidado que le des, 
            es súper fácil de remover y podes elegir miles de diseños!`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaRegKissWinkHeart}
            title={"kapping"}
            disc={`Refuerza tu uña natural evitando que se astille o quiebre, 
            acompana el creciemiento de la misma y tiene una duración aproximadamente de 20 a 15 días, 
            nivela la uña con zurcos o estrias , y lo mejor es que puede aplicarse a todo tipo de uñas!`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaHandHoldingHeart}
            title={"Soft Gel"}
            disc={` Es un sistema de alargamiento de la uña que no la daña sino 
            que acompana su crecimiento y la protege, tienen una duración aproximada de 15 a 20 días 
            dependiendo de su cuidado, no son duras son flexibles, finas y ligeras!`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
