import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { TitleText, Text } from '../../lib/styles/styledAbout';
import ButtonBox from './ButtonBox';

const ButtonBanner = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      {isMobile ? (
        <Container>
          <TextContainer>
            <TitleText eng>EVERYONE'S FUTURE</TitleText>
            <TitleText eng>UPGRADES BY EFUB</TitleText>
            <Text style={{ marginTop: '20px' }}>
              리드부터 인턴, 프론트에서 백, 디자인까지
            </Text>
            <Text>함께하는 웹 개발 커리어클럽</Text>
          </TextContainer>
          <ButtonBox />
        </Container>
      ) : (
        <Container>
          <TextContainer>
            <TitleText eng>EVERYONE'S</TitleText>
            <TitleText eng>FUTURE</TitleText>
            <TitleText eng>UPGRADES</TitleText>
            <TitleText eng>BY EFUB</TitleText>
            <Text style={{ marginTop: '20px' }}>
              리드부터 인턴, 프론트에서 백, 디자인까지
            </Text>
            <Text>함께하는 웹 개발 커리어클럽</Text>
          </TextContainer>
          <ButtonBox />
        </Container>
      )}
    </>
  );
};

export default ButtonBanner;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 100px 0px;
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 60px 0px 50px 0px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;
