import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ModalFrame from '../common/ModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';
import Button from '../common/Button';
import { TitleText, Text } from '../../lib/styles/styledAbout';

const CareerModal = ({ position, _handleModal }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const [buttons, setButtons] = useState([true, false]);
  const _handleSelect = (index) => {
    if (index === 0) setButtons([true, false]);
    else setButtons([false, true]);
  };
  return (
    <>
      {isMobile ? (
        <ModalMobile inner top={position} _handleModal={_handleModal}>
          <TitleText eng style={{ marginTop: '40px' }}>
            EFUB Career
          </TitleText>
          <ButtonWrapper>
            <Button
              round
              blue
              width="8"
              filled={buttons[0]}
              onClick={() => _handleSelect(0)}
              style={{ fontSize: '14px', marginRight: '20px' }}
            >
              수상실적
            </Button>
            <Button
              round
              blue
              width="8"
              filled={buttons[1]}
              onClick={() => _handleSelect(1)}
              style={{ fontSize: '14px' }}
            >
              인턴 및 취업
            </Button>
          </ButtonWrapper>
          <ScrollBox style={{ height: '60vh' }}>
            {buttons[0] ? (
              <>
                {win.map((item) => {
                  return <MarginedText key={item.id}>{item.name}</MarginedText>;
                })}
              </>
            ) : (
              <>
                {job.map((item) => {
                  return <MarginedText key={item.id}>{item.name}</MarginedText>;
                })}
              </>
            )}
          </ScrollBox>
        </ModalMobile>
      ) : (
        <Modal
          inner
          top={position}
          style={{ padding: '3rem' }}
          _handleModal={_handleModal}
        >
          <TitleText eng style={{ fontSize: '30px' }}>EFUB Career</TitleText>
          <ButtonWrapper>
            <Button
              round
              blue
              width="10"
              filled={buttons[0]}
              onClick={() => _handleSelect(0)}
              style={{ marginRight: '20px' }}
            >
              수상실적
            </Button>
            <Button
              round
              blue
              width="10"
              filled={buttons[1]}
              onClick={() => _handleSelect(1)}
            >
              인턴 및 취업
            </Button>
          </ButtonWrapper>
          <ScrollBox>
            {buttons[0] ? (
              <>
                {win.map((item) => {
                  return <MarginedText key={item.id}>{item.name}</MarginedText>;
                })}
              </>
            ) : (
              <>
                {job.map((item) => {
                  return <MarginedText key={item.id}>{item.name}</MarginedText>;
                })}
              </>
            )}
          </ScrollBox>
        </Modal>
      )}
    </>
  );
};

export default CareerModal;

const Modal = styled(ModalFrame)`
  width: 85%;
`;

const ModalMobile = styled(ModalFrameMobile)`
  width: 100%;
`;

const MarginedText = styled(Text)`
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0rem 2rem 0rem;
  @media (max-width: 767px) {
    margin: 3rem 0rem 2rem 0rem;
  }
`;

const ScrollBox = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 100%;
  padding: 3rem;
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const win = [
  { id: 0, name: "'21 우리은행 온(ON)택트 해커톤 대회 최우수상 수상" },
  {
    id: 1,
    name: "'21 제 9회 K-해커톤 소프트웨어교육혁신센터 이사장상 수상",
  },
];

const job = [
  { id: 0, name: "'21 SKT 인턴" },
  { id: 1, name: "'21 LG 전자 인턴" },
  { id: 2, name: "'21 카카오엔터테인먼트 인턴" },
  { id: 3, name: "'21 샤넬코리아 인턴" },
  { id: 4, name: "'21 데이터마케팅코리아 인턴" },
  { id: 5, name: "'21 카카오엔터프라이즈, 다음카카오 인턴" },
  { id: 6, name: "'22 ETRI(한국전자통신연구원) 인턴" },
  { id: 7, name: "'22 LG CNS 입사" },
  { id: 8, name: "'22 NCSOFT 입사" },
];
