import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";
import Banner from '../components/contact/Banner';

const FormBox = styled.div`
  margin-bottom: 5rem;
  width: 70%;
  @media (max-width: 767px) {
    width: 90%;
    margin-bottom: 0rem;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-family: Roboto;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const ContactPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const { email, message } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <>
      <Banner />
      {
        isMobile ? (
          <>
            <FormBox>
              <Label>Email</Label>
              <InputBox
                name="email"
                value={email}
                onChange={onChange}
                placeholder="답변 받을 이메일 주소 입력"
                height="3rem"
              />
              <Label>문의 내용</Label>
              <InputBox
                name="message"
                value={message}
                onChange={onChange}
                placeholder="EFUB과 협업하고 싶어요! / 지원 기준이 어떻게 되나요?"
              />
            </FormBox >
            <Button
              style={{ width: "90%" }}
              onClick={() => { alert(`email : ${email} / message: ${message}`) }}
            >전송하기</Button>
          </>
        ) : (
          <>
            <FormBox>
              <Label>Email</Label>
              <InputBox
                name="email"
                value={email}
                onChange={onChange}
                placeholder="답변 받을 이메일 주소 입력"
                height="5.5rem"
              />
              <Label>문의 내용</Label>
              <InputBox
                name="message"
                value={message}
                onChange={onChange}
                placeholder="EFUB과 협업하고 싶어요! / 지원 기준이 어떻게 되나요?"
              />
            </FormBox >
            <Button
              width="10"
              style={{ marginBottom: "10rem" }}
              onClick={() => { alert(`email : ${email} / message: ${message}`) }}
            >전송하기</Button>
          </>
        )
      }

    </>
  );
};

export default ContactPage;
