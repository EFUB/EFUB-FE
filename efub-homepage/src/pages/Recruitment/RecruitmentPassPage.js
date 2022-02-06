import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import InputLine from '../../components/common/InputLine';
import { checkPass } from '../../lib/api/recruitment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 3rem;
  font-family: Roboto;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 20px;
    width: 15rem;
    display: flex;
    justify-content: center;
  }
`;
const Listbox = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 90%;
  height: 30rem;
  margin: 2rem 0rem 3rem 0rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    height: 20rem;
  }
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const RecruitmentPassPage = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phoneNo: '',
    password: '',
  });

  const onChange = (e) => {
    let { value, name } = e.target;
    if (!(name === 'name')) value = value.replace(/[^0-9]/g, '');
    if (name === 'password') value = value.slice(0, 4);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [pass, setPass] = useState(false);
  const [fail, setFail] = useState(false);

  const _handleClick = async () => {
    const res = await checkPass({ body: inputs, step: 'mid' });
    if (res === true) setPass(true);
    else if (res === false) setFail(true);
  };

  return (
    <>
      {!pass && !fail && (
        <>
          <Title>합격자 조회</Title>
          <Container>
            <InputLine
              name="name"
              value={inputs.name}
              label="이름"
              placeholder="지원자 이름"
              onChange={onChange}
            />
            <InputLine
              name="phoneNo"
              value={inputs.phoneNo}
              label="전화번호"
              placeholder="'-' 없이 입력"
              onChange={onChange}
            />
            <InputLine
              name="password"
              value={inputs.password}
              type="password"
              label="비밀번호"
              placeholder="4자리 입력"
              onChange={onChange}
            />
            <Button
              widthXS
              width="8"
              onClick={() => _handleClick()}
              style={{ marginBottom: '10rem' }}
            >
              조회하기
            </Button>
          </Container>
        </>
      )}
      {pass && (
        <>
          <Title>1차 합격자 발표</Title>
          <Listbox>
            <Text>합격</Text>
          </Listbox>
          <BtnBox>
            <Button
              widthXS
              width="8"
              style={{ marginBottom: '10rem' }}
              onClick={() => setPass(false)}
            >
              돌아가기
            </Button>
          </BtnBox>
        </>
      )}
      {fail && (
        <>
          <Title>1차 합격자 발표</Title>
          <Listbox>
            <Text>불합격</Text>
          </Listbox>
          <BtnBox>
            <Button
              widthXS
              width="8"
              style={{ marginBottom: '10rem' }}
              onClick={() => setFail(false)}
            >
              돌아가기
            </Button>
          </BtnBox>{' '}
        </>
      )}
    </>
  );
};

export default RecruitmentPassPage;
