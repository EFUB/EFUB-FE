import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import palette from "../lib/styles/palette";

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.725rem; //28px
`;

const Input = styled.input`
  font-size: 1rem;
  font-weight: 300;
  border: none;
  background: black;
  border-bottom: 2px solid ${palette.white};
  color: ${palette.white};
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 27rem;
  margin: 3rem 0rem 4rem 0rem;
`;

const ListPage = () => {
  return (
    <>
      <h1>합격자 조회</h1>
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
