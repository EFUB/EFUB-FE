import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const InfoBox = styled.div``;

const ContactPage = () => {
  return (
    <>
      <h1>CONTACT</h1>
      <p>문의 사항을 남겨주시면 이메일로 답변을 보내드립니다.</p>
      <InfoBox>
        <h4>Email</h4>
        <Input
          placeholder="답변받을 이메일 주소 입력"
          name="email"
          // inputwidth="300"
          marginTop="18"
          validinput="true"
        />
        <h4>문의내용</h4>
        <Input
          placeholder="EFUB과 협업하고 싶어요! / 지원 기준이 어떻게 되나요?"
          name="ask"
          height="15"
          // inputwidth="300"
          marginTop="18"
          validinput="true"
        />
      </InfoBox>
      <Button>전송하기</Button>
    </>
  );
};

export default ContactPage;
