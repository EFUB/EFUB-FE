import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import careerButton from '../../assets/about/careerButton.png';
import applyButton from '../../assets/about/applyButton.png';
import curriButton from '../../assets/about/curriButton.png';
import vectorTriangle from '../../assets/about/vectorTriangle.png';
import vectorCircle from '../../assets/about/vectorCircle.png';
import vectorCorn from '../../assets/about/vectorCorn.png';
import CareerModal from './CareerModal';
import CurriModal from './CurriModal';

const ButtonBox = () => {
  const navigate = useNavigate();
  const [careerModal, setCareerModal] = useState(false);
  const [curriModal, setCurriModal] = useState(false);
  const [position, setPosition] = useState(0);

  const _handleCareerClick = () => {
    setCareerModal(!careerModal);
    setPosition(window.pageYOffset);
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };
  const _handleCurriClick = () => {
    setCurriModal(!curriModal);
    setPosition(window.pageYOffset);
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Width />
      <ButtonContainer>
        <Career src={careerButton} onClick={() => _handleCareerClick()} />
        <Apply src={applyButton} onClick={() => navigate('/recruitment')} />
        <Curri src={curriButton} onClick={() => _handleCurriClick()} />
        <VectorTriangle src={vectorTriangle} />
        <VectorCircle src={vectorCircle} />
        <VectorCorn src={vectorCorn} />
      </ButtonContainer>
      <Width />
      {careerModal && (
        <CareerModal position={position} _handleModal={_handleCareerClick} />
      )}
      {curriModal && (
        <CurriModal position={position} _handleModal={_handleCurriClick} />
      )}
    </div>
  );
};

export default ButtonBox;

const Width = styled.div`
  width: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  min-width: 550px;
  height: 320px;
  position: relative;
  @media (max-width: 1023px) {
    min-width: 440px;
    height: 270px;
  }
  @media (max-width: 767px) {
    min-width: 360px;
    height: 220px;
  }
`;

const Career = styled.img`
  width: 280px;
  position: absolute;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 220px;
    top: 20px;
  }
  @media (max-width: 767px) {
    width: 180px;
  }
`;

const Apply = styled.img`
  width: 260px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 200px;
    top: 15px;
  }
  @media (max-width: 767px) {
    width: 160px;
    left: 200px;
  }
`;

const Curri = styled.img`
  width: 360px;
  position: absolute;
  bottom: 15px;
  left: 40px;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 280px;
  }
  @media (max-width: 767px) {
    width: 220px;
  }
`;

const VectorTriangle = styled.img`
  width: 80px;
  position: absolute;
  right: 200px;
  @media (max-width: 1023px) {
    width: 70px;
    right: 140px;
  }
  @media (max-width: 767px) {
    width: 50px;
    top: 20px;
    left: 180px;
  }
`;

const VectorCircle = styled.img`
  width: 80px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  @media (max-width: 1023px) {
    width: 60px;
  }
  @media (max-width: 767px) {
    width: 50px;
    top: 160px;
  }
`;

const VectorCorn = styled.img`
  width: 140px;
  position: absolute;
  right: 0px;
  bottom: 40px;
  @media (max-width: 1023px) {
    width: 120px;
    bottom: 40px;
  }
  @media (max-width: 767px) {
    width: 90px;
    bottom: 30px;
    left: 260px;
  }
`;
