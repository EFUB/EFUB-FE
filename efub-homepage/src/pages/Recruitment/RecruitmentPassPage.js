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
  padding: 4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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
            <Text style={{ marginBottom: '2rem' }}>
              안녕하세요, EFUB입니다.
            </Text>
            <Text>지원자분께서는 면접 대상자로 선정되셨습니다! 🎉</Text>
            <Text style={{ marginBottom: '1rem' }}>
              아래 링크를 통해 노션 페이지에서 본인의 면접 일자 및 시간 확인
              부탁드립니다.
            </Text>
            <Text>
              원활한 면접 진행을 위해 지원자 여러분의 면접 과정을 녹화할
              예정이오니,
            </Text>
            <Text>
              노션 페이지의 구글 폼 동의서를 사전에 작성해 주시면
              감사하겠습니다.
            </Text>
            <Text style={{ marginBottom: '1rem' }}>
              모집 종료 직후 녹화된 영상은 여러분의 개인 정보와 함께 즉시
              삭제됩니다.
            </Text>
            <Text>
              또한 최대한 많은 분들을 뵙기 위해 긴 기간 동안 면접이
              진행되는만큼,
            </Text>
            <Text style={{ marginBottom: '2rem' }}>
              면접 내용에 대한 유출은 자제해 주시면 감사하겠습니다.
            </Text>
            <Text>
              다시 한 번 지원에 감사드리며, 면접일에 뵙도록 하겠습니다.
            </Text>
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
              width="12"
              filled
              onClick={() =>
                window.open(
                  'https://efub.notion.site/EFUB-2-9a68ccb9f4704596913c734b660fbbac',
                  '_blank',
                )
              }
            >
              노션 페이지로 이동
            </Button>
          </BtnBox>
        </>
      )}
      {fail && (
        <>
          <Title>1차 합격자 발표</Title>
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
