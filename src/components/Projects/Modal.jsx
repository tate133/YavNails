import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // Asegúrate de que el z-index sea mayor que el resto del contenido
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;

const EnlargedImage = styled.img`
  width: 100%;
  height: auto;
`;

const Modal = ({ imageUrl, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <EnlargedImage src={imageUrl} alt="Modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;