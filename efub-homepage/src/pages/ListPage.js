import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputLine from "../components/common/InputLine";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 3rem;
  font-family: Roboto;
  font-weight: bold;
`;

const ListPage = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    code: ''
  });

  const { name, phone, code } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onPress = async () => {
    try {
      const { data: { result: res } } = await axios.post("http://3.34.222.176:8080/api/recruitment/pass/mid",
        {
          "name": name,
          "phone_no": phone,
          "password": code
        }
      );
      if (res === '합격')
        navigate("/list/firstlistpass");
      else if (res === '불합격')
        navigate("/list/firstlistfail");
      else
        alert(res);
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Title>합격자 조회</Title>
      <Container>
        <InputLine name="name" value={name} label="이름" placeholder="지원자 이름" onChange={onChange} />
        <InputLine name="phone" value={phone} label="전화번호" placeholder="'-' 없이 입력" onChange={onChange} />
        <InputLine name="code" value={code} label="비밀번호" placeholder="4자리 입력" onChange={onChange} />
        <Button
          width="8"
          onClick={() => onPress()}
          style={{ marginBottom: "10rem" }}
        >조회하기</Button>
      </Container>

    </>
  );
};

export default ListPage;;
