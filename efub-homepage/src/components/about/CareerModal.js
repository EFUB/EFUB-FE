import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ModalFrame from '../common/ModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';
import organizers1 from '../../assets/about/organizers1.png';
import organizers2 from '../../assets/about/organizers2.png';
import organizersMobile1 from '../../assets/about/organizersMobile1.png';
import organizersMobile2 from '../../assets/about/organizersMobile2.png';

const CareerModal = ({ position, card, _handleModal }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      {isMobile ? (
        <ModalMobile top={position} _handleModal={_handleModal}>
          <Title>career</Title>
        </ModalMobile>
      ) : (
        <Modal top={position} _handleModal={_handleModal}>
          <Title>career</Title>
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

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
`;

const Label = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;
