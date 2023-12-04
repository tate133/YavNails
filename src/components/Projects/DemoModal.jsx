import React from 'react';
import styled from 'styled-components';

const DemoModal = ({ imageUrl, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <img src={imageUrl} alt="Demo" />
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 5px;
    object-fit: contain; /* Asegura que la imagen se ajuste al contenedor */
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

export default DemoModal;