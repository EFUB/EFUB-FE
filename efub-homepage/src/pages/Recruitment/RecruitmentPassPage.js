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
  margin: 2rem 0rem 3rem 0rem;
  padding: 4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
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
    const res = await checkPass({ body: inputs, step: 'final' });
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
          <Title>최종 합격자 발표</Title>
          <Listbox>
            <Text style={{ marginBottom: '2rem' }}>
              안녕하세요, EFUB 2기 운영진입니다.
            </Text>
            <Text>EFUB 2기의 새로운 퍼비가 되신 걸 축하드립니다! 🎉</Text>
            <Text>엄청난 경쟁률을 뚫고 합격하신 여러분들과</Text>
            <Text style={{ marginBottom: '2rem' }}>
              앞으로 1년 동안 함께 웹개발의 길을 나아가게 되어 영광으로
              생각합니다.
            </Text>
            <Text>
              먼저 여러분들의 합격 확인을 위해 아래 구글 폼을 작성해주시면
              감사하겠습니다.
            </Text>
            <Text>
              공지톡과 사담톡에는 오늘 오후 6시에 초대해 드릴 예정입니다.
            </Text>
            <Text style={{ marginBottom: '2rem' }}>
              다시 한 번 지원에 감사드리며, 3월 8일 OT에서 뵙도록 하겠습니다 :)
            </Text>
            <Text>EFUB 2기 운영진 일동</Text>
          </Listbox>
          <BtnBox>
            <Button
              widthXS
              width="8"
              style={{ marginRight: '2rem' }}
              onClick={() => setPass(false)}
            >
              돌아가기
            </Button>
            <Button
              widthXS
              width="14"
              filled
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSeSoBS_hV-kN84t8dbBYzqmuwPqG-7aa83vlWqHnK7WvC5f3A/viewform',
                  '_blank',
                )
              }
            >
              구글 폼 제출하기
            </Button>
          </BtnBox>
        </>
      )}
      {fail && (
        <>
          <Title>최종 합격자 발표</Title>
          <Listbox>
            <Text style={{ marginBottom: '2rem' }}>
              안녕하세요, EFUB입니다.
            </Text>
            <Text>
              귀한 시간을 내어 EFUB에 지원해 주신 모든 분들께 감사의 말씀을
              드립니다.
            </Text>
            <Text style={{ marginBottom: '1rem' }}>
              아쉽게도 이번 기수에서는 지원자님과 함께하지 못하게 되었습니다.
            </Text>
            <Text>지원자 여러분 모두가 출중한 실력과 열정을 보여주셨지만,</Text>
            <Text style={{ marginBottom: '1rem' }}>
              동아리의 규모로 인해 제한된 인원을 선발해야 한다는 점에 대해
              아쉽고 죄송한 마음입니다.
            </Text>
            <Text>올해 함께하진 못하지만,</Text>
            <Text style={{ marginBottom: '2rem' }}>
              훗날 현직에서 든든한 동기로 다시금 뵐 날을 기대하겠습니다.
            </Text>
            <Text>지원해 주셔서 다시 한번 감사드립니다.</Text>
          </Listbox>
          <BtnBox>
            <Button widthXS width="8" onClick={() => setFail(false)}>
              돌아가기
            </Button>
          </BtnBox>
        </>
      )}
    </>
  );
};

export default RecruitmentPassPage;
