//연결해야하는부분

import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import InputLine from "../../components/common/InputLine";


// import DeveloperApplyFormPage from "./DeveloperApplyFormPage";
// import DeveloperApplyInternPage from "./DeveloperApplyInternPage";
// import DeveloperApplyLeadPage from "./DeveloperApplyLeadPage";
// import DesignerApplyFormPage from "./DesignerApplyFormPage";


const BannerBlock = styled.div`
    width: 100%;
    position: relative;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const Subtitle = styled.div`
    font-size: 1.25rem;
    font-family: Roboto;
    margin-bottom: 1.5rem;
`;

const Main = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    justify-content: space-between;
`
const Text = styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-size: 1rem;
    line-height: 2rem;
`

const DeveloperApplyMainPage = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    studentId: '',
    major: '',
    phone: '',
    code: ''
  });

  const { name, studentId, major, phone, code } = inputs;
  const position = 1;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onPress = async () => {
    try {
      const { data: res } = await axios.post("http://3.34.222.176:8080/api/recruitment/apply/user",
        {
          "name": name,
          "student_id": studentId,
          "department": major,
          "phone_no": phone,
          "password": code,
          "position": 1
        }
      );
      console.log(res)
      if (res.saveFinal === 'true')
        alert('이미 제출 완료')
      else
        navigate(`/developer-apply/form/${res.userId}`)
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <BannerBlock>
        <Title>DEVELOPER</Title>
        <Subtitle>지원서 작성</Subtitle>
      </BannerBlock>
      <Main>
        <InputLine name="name" value={name} label="이름" placeholder="지원자 이름" onChange={onChange} />
        <InputLine name="studentId" value={studentId} label="학번" placeholder="ex. 1886123" onChange={onChange} />
        <InputLine name="major" value={major} label="단대 및 학과" placeholder="ex.엘텍공과대학 소프트웨어학부 컴퓨터공학과" onChange={onChange} />
        <InputLine name="phone" value={phone} label="전화번호" placeholder="'-' 없이 입력" onChange={onChange} />
        <InputLine name="code" value={code} label="비밀번호 설정" placeholder="비밀번호 4자리" onChange={onChange} />
        <Text style={{ marginTop: "2rem" }}>인적사항은 추후 면접 일시와 합격 안내 시 이용됩니다.</Text>
        <Text>여러분의 소중한 개인정보는 이펍 모집 일정이 끝난 직후 바로 폐기됩니다.</Text>
        <Bottom>
          <Text>1/3 페이지</Text>
          <Button filled onClick={() => onPress()} > 다음</Button>
        </Bottom>
      </Main>
    </>
  );
};

export default DeveloperApplyMainPage;
