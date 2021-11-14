import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import Button from "../components/common/Button";
import { RadioButton } from "../components/common/RadioButton";
import { CheckBox } from "../components/common/CheckBox";

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
  height: 100rem;
`;
const Foot = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-between;
`;
const FootSub = styled.div`
  width: 47%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TextBox = styled.div`
  width: 100%;
  height: 9rem;
  border-radius: 14px;
  background-color: rgba(225, 225, 225, 0.15);
  margin-bottom: 2.5rem;
`;
const Text1 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.725rem; //28px
`;
const Text2 = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.725rem; //28px
`;
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
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
`;
const DesignerRecruitSub = () => {
  const [select, setSelect] = useState("all");

  return (
    <div>
      <Banner>
        <h1 style={{ height: "3.5rem", marginBottom: "0.01rem" }}>
          UI/UX DESIGNER
        </h1>
        <h6 style={{ marginTop: "0.001rem" }}>지원서 작성</h6>
      </Banner>
      <Main>
        <Text1>1. EFUB에 지원하게된 동기를 적어주세요 (300자 내외)</Text1>
        <TextBox />
        <Text1>2. 웹디자인에 대한 자신감을 5점 만점으로 평가해주세요.</Text1>
        <Row style={{ width: "42%", marginLeft: "54%" }}>
          <Text1>1</Text1>
          <Text1>2</Text1>
          <Text1>3</Text1>
          <Text1>4</Text1>
          <Text1>5</Text1>
        </Row>
        <Row style={{ marginBottom: "3rem" }}>
          <Text1 style={{ marginTop: "1rem" }}>내 자신감은..</Text1>
          <RadioButton />
        </Row>
        <Text1>3. 사용할 수 있는 디자인 툴을 모두 선택해주세요.</Text1>

        <Text1>
          3-1. 선택하신 툴에 대한 능숙도를 5점 만점으로 평가해주세요.
        </Text1>
        <Row style={{ width: "42%", marginLeft: "54%" }}>
          <Text1>1</Text1>
          <Text1>2</Text1>
          <Text1>3</Text1>
          <Text1>4</Text1>
          <Text1>5</Text1>
        </Row>
        <Row style={{ marginBottom: "3rem" }}>
          <Text1 style={{ marginTop: "1rem" }}>내 자신감은..</Text1>
          <RadioButton />
        </Row>
        <Text1>
          4. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히
          설명해주세요.(100자 내외)
        </Text1>
        <TextBox />
        <Text1>
          5. 개발자와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.
        </Text1>
        <TextBox />
        <Text1>
          6. 디자이너와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.
        </Text1>
        <TextBox />
        <Text1>7. 포트플리오 링크를 제출해주세요.</Text1>
        <Input />
        <Text1>
          8. 면접은 9월 9일(금) 저녁 7시부터 10시에 진행됩니다. 참여
          가능하십니까?
        </Text1>
        <Text1>
          9. 오티는 9월 11일 토요일 09시 30분에 진행됩니다. 오티를 참석하지
          않으실 경우, 합격은 취소됩니다. 확인하셨습니까?
        </Text1>
        <Foot>
          <Text2>2/2 페이지</Text2>
          <FootSub>
            <Button blue>저장</Button>
            <Link to="/thankyou">
              <Button filled>제출하기</Button>
            </Link>
          </FootSub>
        </Foot>
      </Main>
    </div>
  );
};

export default DesignerRecruitSub;
