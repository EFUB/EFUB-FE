import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ModalFrame from '../common/ModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';
import Button from '../common/Button';
import { TitleText, Text } from '../../lib/styles/styledAbout';

const CareerModal = ({ position, card, _handleModal }) => {
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
        <ModalMobile top={position} _handleModal={_handleModal}>
          <TitleText eng>EFUB Career</TitleText>
          <Button>수상실적</Button>
        </ModalMobile>
      ) : (
        <Modal
          inner
          top={position}
          style={{ padding: '6rem' }}
          _handleModal={_handleModal}
        >
          <TitleText eng>EFUB Career</TitleText>
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
                <MarginedText>
                  '2021 우리은행 온(ON)택트 해커톤 대회 최우수상 수상
                </MarginedText>
                <MarginedText>
                  '2021 제 9회 K-Hackathon 소프트웨어교육혁신센터 이사장상
                </MarginedText>
              </>
            ) : (
              <>
                <MarginedText>'2021 SKT 인턴</MarginedText>
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0rem 2rem 0rem;
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
`;
