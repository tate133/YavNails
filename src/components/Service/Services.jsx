import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
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
            Icon={MdDesignServices}
            title={"autodidacta"}
            disc={`Capacitarse de manera constante es crucial para la resolución de problemas o bugs que puedan presentarse. 
              Es por eso que priorizo mantenerme informado, valorando los diferentes puntos de vista.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"ordenado"}
            disc={`El aprendizaje y la experiencia de los proyectos realizados, me dieron la capacidad de dividir en partes 
              los mismos cumpliendo con objetivos pequeños a priori. De esta manera el resultado final es más factible de alcanzar.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"apasionado"}
            disc={`Descubrir el mundo de la programación llamó mi atención por completo. Es por ello qué, me preparo día a 
              día profesionalmente para enriquecer mi capacidad de resolver diferentes problemas en distintas situaciones.`}
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
