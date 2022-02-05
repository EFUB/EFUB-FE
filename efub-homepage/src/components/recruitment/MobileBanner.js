import React, { useState } from 'react';
import styled from 'styled-components';
import graphic from '../../assets/recruitment/Mobile.png';
import close from '../../assets/close-icon.png';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const BackgroundBox = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.15);
  border-radius: 10px;
`;

const Text = styled.div`
  font-size: ${(props) => props.size || '30px'};
  font-family: ${(props) => props.font || 'Montserrat'};
  color: ${(props) => props.color || 'white'};
  margin-bottom: ${(props) => props.margin || '0px'};
  font-weight: bold;
`;

const Container = styled.div`
  top: ${(props) => props.top || 0}px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 20rem;
  border-radius: 10px;
  padding: 2rem;
  background-color: black;
  width: 60rem;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 10rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Close = styled.img.attrs({
  src: close,
})`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 15px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileBanner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [position, setPosition] = useState(0);

  const _handleModal = () => {
    setOpenModal(!openModal);
    setPosition(window.pageYOffset);
  };
  return (
    <>
      <Wrapper>
        <Title>RECRUITMENT</Title>
        <BackgroundBox>
          <Text size="20px" margin="30px">
            EFUB 2nd Recruiting
          </Text>
          <Text>EWHA</Text>
          <Text>FRONTEND</Text>
          <Text>UXUI</Text>
          <Text margin="30px">BACKEND</Text>
          <Text size="12px" font="Roboto" margin="5px">
            모집분야 | UXUI 디자인, 프론트/백엔드 개발
          </Text>
          <Text size="12px" font="Roboto">
            모집기간 | 02/14 ~ 02/25 23:59까지
          </Text>
        </BackgroundBox>
      </Wrapper>
      <img
        src={graphic}
        alt="graphic"
        style={{ width: '90%', cursor: 'pointer' }}
        onClick={_handleModal}
      />
      {openModal && (
        <Container top={position}>
          <Background onClick={_handleModal} />
          <ModalBlock>
            <Close onClick={_handleModal} />
            <Contents>
              <Text size="25px" margin="5px">
                지원서 작성은
              </Text>
              <Text size="25px" margin="10px">
                PC로 부탁드립니다.
              </Text>
              <Text size="15px" color="gray">
                * 모바일 환경에서는
              </Text>
              <Text size="15px" color="gray">
                지원서가 제공되지 않습니다.
              </Text>
            </Contents>
          </ModalBlock>
        </Container>
      )}
    </>
  );
};

export default MobileBanner;
