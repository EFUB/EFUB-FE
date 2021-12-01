//연결해야하는부분

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import InputLine from "../../components/common/InputLine";
import SaveUserID from "../../components/common/SaveUserID";

import axios from 'axios'
import { USER_SERVER } from '../../config'
import { USER_INFO, CONTACT, SAVED_INFO_DES, SAVED_INFO_DEV } from '../../_actions/type'
import { userInfo } from '../../_actions/user_actions' ;

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

  // 이 사람이 등록을 한 적이 있는가?
  const [isMember, setIsMember]  = useState({ status: 'idle', userId: "", saveFinal: "" });


  return (
    <>
      <BannerBlock>
        <Title>DEVELOPER</Title>
        <Subtitle>지원서 작성</Subtitle>
      </BannerBlock>
      <Main>
        <InputLine name="name" value={name} label="이름" placeholder="지원자 이름" onChange={onChange} />
        <InputLine name="studentId" value={studentId} label="학번" placeholder="ex. 18862021" onChange={onChange} />
        <InputLine name="major" value={major} label="단대 및 학과" placeholder="ex.엘텍공과대학 소프트웨어학부 컴퓨터공학과" onChange={onChange} />
        <InputLine name="phone" value={phone} label="전화번호" placeholder="ex.010-1886-2021" onChange={onChange} />
        <InputLine name="code" value={code} label="비밀번호 설정" placeholder="비밀번호 4자리" onChange={onChange} />
        <Text style={{ marginTop: "2rem" }}>인적사항은 추후 면접 일시와 합격 안내 시 이용됩니다.</Text>
        <Text>여러분의 소중한 개인정보는 이펍 모집 일정이 끝난 직후 바로 폐기됩니다.</Text>
        <Bottom>
          <Text>1/3 페이지</Text>
          <Button filled onClick={() => { 

                            // fetch(userInfo(name, studentId, major, phone, code, position))
                            axios
                            .get(`${USER_SERVER}/api/recruitment/apply/user?
                              name=${name}&student_id=${studentId}&department=${major}
                              &phone_no=${phone}&password=${code}&position=${position}`)
                            .then(response => {
                                // setIsMember({ status: 'pending' })
                                // const data = response.payload
                                // setTimeout(() => setIsMember({ status: 'resolved', member: data }), 600)
                                isMember.userId = response.data.userId;
                                isMember.saveFinal = response.data.saveFinal;
                            });

                            console.log(isMember?.saveFinal);
                            console.log(isMember?.userId);

                                if (isMember?.saveFinal){
                                    alert(`이미 지원하셨습니다.`)
                                } else{
                                    SaveUserID(isMember?.userId);
                                    alert(` 다음 페이지로 진행합니다.${isMember?.userId}`)
                                    window.location.replace ("/developer-apply/form")
                                }
                            }}> 다음</Button>
        </Bottom>
      </Main>
    </>
  );
};

export default DeveloperApplyMainPage;
