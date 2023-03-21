import React, { useRef } from 'react'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { Slide } from 'react-awesome-reveal';
import { Typography, Box } from '@mui/material';

import react from '../../assets/images/React_logo.png';
import node from '../../assets/images/Node_logo.png';
import mysql from '../../assets/images/Mysql_logo.png';
import mui from '../../assets/images/Mui_logo.png';
import mongo from '../../assets/images/MongoHD_logo.png';
import javascript from '../../assets/images/JavascriptHD_logo.png';
import html5 from '../../assets/images/Html5HD_logo.png';
import css from '../../assets/images/Css_logo.png';
import bootstrap from '../../assets/images/Bootstrap_logo.png';
import express from '../../assets/images/Express_logo.png';

let clients = [
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 3,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 4,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Tecnologías</span>
            <h1>trabajo con</h1>
        </Slide>
        <Testimonials>
            <Slide direction="right">
                <StyledBox>
                    <StyledImgContainer>
                        <StyledImg src={html5} />
                        <StyledImgText>html5</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={css} />
                        <StyledImgText>Css</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={javascript} />
                        <StyledImgText>JavaScript</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={react} />
                        <StyledImgText>React</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={mui} />
                        <StyledImgText>ReactMUI</StyledImgText>
                    </StyledImgContainer>
                </StyledBox>
                <StyledBox>
                    <StyledImgContainer>
                        <StyledImg src={bootstrap} />
                        <StyledImgText>Bootstrap</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={node} />
                        <StyledImgText>Node.js</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={mongo} />
                        <StyledImgText>MongoDB</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={mysql} />
                        <StyledImgText>MySQL</StyledImgText>
                    </StyledImgContainer>
                    <StyledImgContainer>
                        <StyledImg src={express} />
                        <StyledImgText>Express.js</StyledImgText>
                    </StyledImgContainer>
                </StyledBox>
            </Slide>
            
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
{/* Estilos de otro proyecto */}
const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding-bottom: 20px;

    @media (max-width: 720px) {
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 0px;
        margin-bottom: -20px;
        & > div {
          margin: 60px;
        }
    }

    @media screen and (min-width: 721px) and (max-width: 1110px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const StyledImg = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    filter: grayscale(100%);

    &:hover {
        transform: scale(1.2);
        transition: 0.6s;
        cursor: pointer;
        filter: drop-shadow(0px 10px 10px #01be9570);
    }

    @media (max-width: 720px) {
        max-width: 100%;
    }
`;

const StyledImgContainer = styled.div`
  position: relative;
  margin: 0 80px;
  max-width: 57px;
  max-height: 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 720px) {
    }
`;

const StyledImgText = styled(Typography)`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 5px;
    font-size: 13px !important;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 15px !important;
    }
`;