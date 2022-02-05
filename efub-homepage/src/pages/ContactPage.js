import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import palette from "../lib/styles/palette";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";
import Banner from '../components/contact/Banner';
import Loading from '../components/common/Loading';

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

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const { email, message } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const sendContact = async () => {
    setLoading(true);
    try {
      const { data: res } = await axios.post('http://3.34.222.176:8080/api/contact',
        {
          "writer_email": email,
          "content": message
        })
      if (res === 200) {
        setLoading(false);
        swal.fire({
          title: '메일을 성공적으로 보냈습니다!',
          text: '확인 후 입력하신 주소로 빠르게 답변드리겠습니다 :)',
          icon: 'success',
          confirmButtonText: '확인',
          background: palette.black,
          color: palette.white,
          confirmButtonColor: palette.black,
        })
      }
      else {
        console.log(res)
      }
    }
    catch (e) {
      console.log(e)
    }
  }
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
              onClick={() => sendContact()}
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
              onClick={() => sendContact()}
            >전송하기</Button>
          </>
        )
      }
      {
        loading ? <Loading /> : <></>
      }

    </>
  );
};

export default ContactPage;
