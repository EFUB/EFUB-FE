import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import palette from "../lib/styles/palette";

const Title = styled.div`
  font-size: 3rem;
  margin: 3rem;
  font-family: Roboto;
  font-weight: bold;
`;

const Text = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background: black;
  border-bottom: 2px solid ${palette.white};
  color: ${palette.white};
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 550px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25rem;
`;

const ListPage = () => {
  return (
    <>
      <Title>합격자 조회</Title>
      <InfoBox>
        <Text>이름</Text>
        <Input placeholder="지원자 이름" />
        <Text>전화번호</Text>
        <Input placeholder="'-'없이 입력" />
        <Text>비밀번호</Text>
        <Input placeholder="4자리 입력" />
      </InfoBox>
      <Link to="/firstList">
        <Button>조회하기</Button>
      </Link>
    </>
  );
};

export default ListPage;
