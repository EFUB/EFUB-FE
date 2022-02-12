import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../../lib/styles/styledAbout';
import palette from '../../lib/styles/palette';
import vectorCocktail from '../../assets/about/vectorCocktail.png';
import organizerButton from '../../assets/about/organizerButton.png';

const Organizer = () => {
  return (
    <>
      <TitleContainer>
        <TitleText eng>EFUB ORGANIZER</TitleText>
      </TitleContainer>
      <Container>
        <OrganizerContainer>
          {organizerListGreen.map((item) => (
            <OrganizerBox key={item.id}>
              <Role green>{item.role}</Role>
              <Name>{item.name}</Name>
            </OrganizerBox>
          ))}
          {organizerListBlue.map((item) => (
            <OrganizerBox key={item.id}>
              <Role>{item.role}</Role>
              <Name>{item.name}</Name>
            </OrganizerBox>
          ))}
        </OrganizerContainer>
        <ButtonContainer>
          <Vector src={vectorCocktail} />
          <Button src={organizerButton} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Organizer;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0px;
  @media (max-width: 1023px) {
    margin: 100px 0px 10px 0px;
  }
  @media (max-width: 767px) {
    margin: 50px 0px 0px 0px;
  }
`;

const OrganizerBox = styled.div`
  width: 140px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

const OrganizerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;

const Role = styled.div`
  color: ${(props) => (props.green ? palette.green : palette.blue)};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const Name = styled.div`
  color: 'white';
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 1767px) {
    margin: 50px 0px 0px 0px;
  }
`;

const ButtonContainer = styled.div`
  min-width: 450px;
  height: 350px;
  position: relative;
  @media (max-width: 1023px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    min-width: 100%;
    height: 260px;
  }
`;

const Vector = styled.img`
  height: 320px;
  position: absolute;
  right: 0px;
  @media (max-width: 767px) {
    height: 240px;
  }
`;

const Button = styled.img`
  height: 170px;
  position: absolute;
  bottom: 0px;
  @media (max-width: 767px) {
    height: 140px;
  }
`;

const organizerListGreen = [
  { id: 1, role: '회장', name: '윤효정' },
  { id: 2, role: '부회장', name: '김시연' },
  { id: 3, role: '총무', name: '김민주' },
];

const organizerListBlue = [
  { id: 1, role: '프론트장', name: '이해린' },
  { id: 2, role: '백엔드장', name: '강민지' },
  { id: 3, role: '디자이너장', name: '김채령' },
];
