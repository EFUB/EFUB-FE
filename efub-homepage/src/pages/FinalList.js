import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Listbox = styled.div`
  background-color: #c4c4c4;
  width: 90%;
  height: 30rem;
  margin: 2rem 0rem 3rem 0rem;
`;

const FinalList = () => {
  return (
    <>
      <h1>최종 합격자 발표</h1>
      <Listbox />
      <Link to="/list">
        <Button>돌아가기</Button>
      </Link>
    </>
  );
};

export default FinalList;
