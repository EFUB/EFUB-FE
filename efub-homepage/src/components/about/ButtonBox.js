import React from 'react';
import styled from 'styled-components';
import careerButton from '../../assets/about/careerButton.png';
import applyButton from '../../assets/about/applyButton.png';
import curriButton from '../../assets/about/curriButton.png';
import vectorTriangle from '../../assets/about/vectorTriangle.png';
import vectorCircle from '../../assets/about/vectorCircle.png';
import vectorCorn from '../../assets/about/vectorCorn.png';

const ButtonBox = () => {
  return (
    <ButtonContainer>
      <Career src={careerButton} />
      <Apply src={applyButton} />
      <Curri src={curriButton} />
      <VectorTriangle src={vectorTriangle} />
      <VectorCircle src={vectorCircle} />
      <VectorCorn src={vectorCorn} />
    </ButtonContainer>
  );
};

export default ButtonBox;

const ButtonContainer = styled.div`
  min-width: 550px;
  height: 320px;
  position: relative;
  @media (max-width: 1023px) {
    min-width: 440px;
    height: 270px;
  }
  @media (max-width: 767px) {
    min-width: 100%;
    height: 220px;
  }
`;

const Career = styled.img`
  width: 280px;
  position: absolute;
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
  @media (max-width: 1023px) {
    width: 200px;
    top: 15px;
  }
  @media (max-width: 767px) {
    width: 160px;
  }
`;

const Curri = styled.img`
  width: 360px;
  position: absolute;
  bottom: 15px;
  left: 40px;
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
    right: 130px;
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
    bottom: 20px;
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
  }
`;
