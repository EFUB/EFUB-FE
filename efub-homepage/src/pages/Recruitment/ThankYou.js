import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 73vh;
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 4rem;
`;

const ThankYou = () => {
  return (
    <Wrapper>
      <Title>지원해주셔서 감사합니다.</Title>
      <Subtitle>EFUB에서 함께할 당신의 앞날을 응원합니다!</Subtitle>
      <Link to="/">
        <Button width="14">처음으로 돌아가기</Button>
      </Link>
    </Wrapper>
  );
};

export default ThankYou;
