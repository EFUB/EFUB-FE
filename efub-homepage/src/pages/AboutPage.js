import React from 'react';
import styled from 'styled-components';
import ButtonBanner from '../components/about/ButtonBanner';
import logoBanner from '../assets/about/logoBanner.gif';
import Review from '../components/about/Review';
import Organizer from '../components/about/Organizer';
import palette from '../lib/styles/palette';

const AboutPage = () => {
  return (
    <>
      <img src={logoBanner} alt="logoBanner" style={{ width: '100%' }} />
      <ButtonBanner />
      <Review />
      <Organizer />
      <LineContainer>
        {team.map((t) => {
          return (
            <Line>
              <BoldText>{t.part}</BoldText>
              <Text>{t.names}</Text>
            </Line>
          );
        })}
      </LineContainer>
    </>
  );
};

export default AboutPage;

const LineContainer = styled.div`
  width: 100%;
  border-top: 0.5px solid ${palette.backdrop};
  border-bottom: 0.5px solid ${palette.backdrop};
  padding: 20px 0px;
  margin-top: 200px;
  @media (max-width: 767px) {
    padding: 10px 0px;

    margin-top: 50px;
  }
`;

const Line = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    min-height: 30px;
  }
`;

const BoldText = styled.div`
  min-width: 200px;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${palette.gray};
  @media (max-width: 767px) {
    min-width: 110px;
    font-size: 10px;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${palette.gray};
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

const team = [
  {
    id: 0,
    part: 'FrontEnd Developer',
    names: '이해린 | 오지은 | 이로움 | 김소민',
  },
  {
    id: 1,
    part: 'BackEnd Developer',
    names: '강민지 | 박주은 | 이서정 | 문효진',
  },
  { id: 2, part: 'UXUI Designer', names: '김채령 | 조정연 | 신희선' },
];
