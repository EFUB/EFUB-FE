import React from 'react';
import styled from 'styled-components';
import close from '../../assets/common/close-icon.png';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2000;
  top: ${(props) => props.top || 0}px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ModalBlock = styled.div`
  padding: 4rem;
  background-color: black;
  min-height: 100vh;
  overflow: ${(props) => (props.inner ? 'hidden' : 'scroll')};
  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Close = styled.img.attrs({
  src: close,
})`
  position: absolute;
  right: 4rem;
  top: 4rem;
  cursor: pointer;
  @media (max-width: 767px) {
    right: 2rem;
    top: 2rem;
    width: 1.5rem;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalFrameMobile = ({ inner, top, _handleModal, children, ...rest }) => {
  // _handleModal로 modal open/close 되는 토글 함수 넣어 주면 됨
  /* style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록 */
  /* ...rest를 사용하여 ModalFrame에게 전달 */
  return (
    <Container top={top}>
      <ModalBlock inner={inner} {...rest}>
        <Close onClick={_handleModal} />
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default ModalFrameMobile;
