import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const Title = styled.div`
  font-size: 3rem;
  margin: 3rem;
  font-family: Roboto;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 20px;
    width: 15rem;
    display: flex;
    justify-content: center;
  }
`;

const Listbox = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 90%;
  height: 30rem;
  margin: 2rem 0rem 3rem 0rem;
  border-radius: 10px;
  @media (max-width: 767px) {
    height: 20rem;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const FinalList = () => {
  return (
    <>
      <Title>최종 합격자 발표</Title>
      <Listbox />
      <BtnBox>
        <Link to="/list">
          <Button widthXS width="8" style={{ marginBottom: '10rem' }}>
            돌아가기
          </Button>
        </Link>
      </BtnBox>
    </>
  );
};

export default FinalList;
