import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ButtonBox = styled.div`
  margin-top: 5rem;
`;

const ThankYou = () => {
  return (
    <Wrapper>
      <h1>지원해주셔서 감사합니다.</h1>
      <h3>EFUB에서 함께할 당신의 앞날을 응원합니다!</h3>
      <Link to="/">
        <ButtonBox>
          <Button>처음으로 돌아가기</Button>
        </ButtonBox>
      </Link>
    </Wrapper>
  );
};

export default ThankYou;
