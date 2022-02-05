import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const Listbox = styled.div`
  background-color: #c4c4c4;
  width: 90%;
  height: 30rem;
  margin: 2rem 0rem 3rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FirstListFail = () => {
  return (
    <>
      <h1>1차 합격자 발표</h1>
      <Listbox>
        <Text>불합격</Text>
      </Listbox>
      <Link to="/list">
        <Button width="10">돌아가기</Button>
      </Link>
    </>
  );
};

export default FirstListFail;
