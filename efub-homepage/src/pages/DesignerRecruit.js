import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette"
import Button from "../components/common/Button";

const Banner = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    width: 35rem;
    height: 50rem;
`
const Foot = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
    justify-content: space-between;
`
const Text1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.725rem; //28px
`
const Text2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.725rem; //28px
`
const Input = styled.input`
    font-size: 1rem;
    font-weight: 300;
    border: none;
    background: black;
    border-bottom: 2px solid ${palette.white};
    color: ${palette.white};
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    width: 100%; 
`

const DesignerRecruit = () => {
  const [select,setSelect] = useState("all")
  return <div>
    <>
    <Banner>
      <h1 style = {{height: '3.5rem', marginBottom: '0.01rem'}} >UI/UX DESIGNER</h1>
      <h4 style = {{marginTop: '0.001rem'}}>지원서 작성</h4>
    </Banner>
    <Main>
      <Text1>이름</Text1>
      <Input placeholder= "지원자 이름"/>
      <Text1>학번</Text1>
      <Input placeholder= "ex. 18862021"/>
      <Text1>단대 및 학과</Text1>
      <Input placeholder= "ex.조형예술대학 디자인학부"/>
      <Text1>전화번호</Text1>
      <Input placeholder= "ex.010-1886-2021"/>
      <Text1>비밀번호 설정</Text1>
      <Input placeholder= "비밀번호 4자리"/>
      <Text2 style = {{marginTop: "1.725rem"}}>인적사항은 추후 면접 일시와 합격 안내 시 이용됩니다.</Text2>
      <Text2>여러분의 소중한 개인정보는 이펍 모집 일정이 끝난 직후 바로 폐기됩니다.</Text2>
      <Foot>
        <Text2>1/2 페이지</Text2>
        <Link to = "/designerRecruitSub">
          <Button filled>다음</Button>
        </Link>
      </Foot>
    </Main>
  </>
  </div>
};

export default DesignerRecruit;
