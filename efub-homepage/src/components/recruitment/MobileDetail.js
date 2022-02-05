import React, { useState } from "react";
import styled from 'styled-components';
import Dropdown from "./Dropdown";

const Wrapper = styled.div`
    width: 100%;
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Textbox = styled.div`
  width: 100%;
    margin-bottom: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
`;

const Title = styled.div`
    font-family: "Roboto";
    font-size: 22px;
    font-weight: bold;
    line-height: 35px;
    margin-bottom: ${(props) => props.margin};
`;

const Text = styled.div`
    width: 100%;
    margin-bottom: ${(props) => props.margin};
    font-family: "Roboto";
    font-size: 15px;
    line-height: 25px;
`;

const Message = styled.div`
    font-family: "Roboto";
    font-size: 22px;
    font-weight: bold;
    margin-top: 3rem;
`;

const MobileDetail = () => {
  const [detail, setDetail] = useState([false, false, false, false, false, false])
  const _handleClick = (idx) => {
    let newDetail = [...detail];
    newDetail[idx] = !detail[idx];
    setDetail(newDetail);
    console.log(detail)
  }
  return (
    <Wrapper>
      <Textbox>
        <Title>이화여대 교내 유일 웹 개발</Title>
        <Title margin="20px"> 커리어 클럽 EFUB 모집</Title>
        <Text>이화 웹 개발 커리어 클럽 EFUB에서 웹 개발자 및 웹 디자이너 여러분을 모집합니다.</Text>
      </Textbox>
      <Dropdown onClick={() => _handleClick(0)} title="모집 분야" open={detail[0]} />
      {
        detail[0] ? (
          <Textbox>
            <Text margin="1rem">리드 개발자는 곧장 프로젝트 착수와 세미나 주최가 가능한 인원이며, 인턴 개발자는 양쪽 분야의 리드를 보고 학습을 진행해 자신이 어느 쪽의 직무가 적성에 맞는지 탐색할 수 있습니다.</Text>
            <Text>디자이너의 경우, 리드 포지션만을 선발하여 곧장 프로젝트에 착수 가능한 인원을 선발합니다.</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(1)} title="활동 안내" open={detail[1]} />
      {
        detail[1] ? (
          <Textbox>
            <Text>FrontEnd | 월요일 19:00~22:00</Text>
            <Text>BackEnd | 화요일 19:00~22:00</Text>
            <Text>UXUI | 목요일 20:00~21:30</Text>
            <Text style={{ color: "gray" }}> * 두 개 이상의 파트가 참여하는 세미나의 경우</Text>
            <Text style={{ color: "gray"}}>화요일 19:00에 진행됩니다.</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(2)} title="활동 혜택" open={detail[2]} />
      {
        detail[2] ? (
          <Textbox>
            <Text>인재개발원 공식 수료증 발급</Text>
            <Text>개발자, 디자이너 간 협업 경험</Text>
            <Text>우수 활동자 선정 시 상품 증정</Text>
            <Text>연사 초청 세미나 참여 기회</Text>
            <Text>외부 협력 업체에서 지원하는 커리어 코칭</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(3)} title="지원 자격" open={detail[3]} />
      {
        detail[3] ? (
          <Textbox>
            <Text style={{fontWeight: "bold", fontSize: "18px"}} >개발자</Text>
            <Text>2학기 이상 이수자</Text>
            <Text>학번, 나이, 전공 불문 웹개발에 열정이 있는</Text>
            <Text style={{ fontWeight: "bold" }}>최소 한 가지의 프로그래밍 언어를 다룰 수 있는 이화인</Text>
            <Text style={{fontWeight: "bold", fontSize: "18px", marginTop: "15px"}} >디자이너</Text>
            <Text>3학기 이상 이수자</Text>
            <Text>학번, 나이, 전공 불문 웹디자인에 열정이 있는</Text>
            <Text style={{ fontWeight: "bold" }}>포트폴리오 제출이 가능한 이화인</Text>
            <Text style={{ color: "gray" }}> * 졸업생 및 대학원생은 지원이 불가합니다.</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(4)} title="지원 방법" open={detail[4]} />
      {
        detail[4] ? (
          <Textbox>
            <Text>웹사이트 접속 &gt; RECRUITMENT &gt; 상단 지원하기 버튼 </Text>
            <Text style={{color: "gray"}}>* 지원서 작성은 PC로 부탁드립니다.</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(5)} title="모집 일정" open={detail[5]} />
      {
        detail[5] ? (
          <Textbox style={{display: "flex", flexDirection: "row"}}>
            <Textbox style={{padding: "0px"}}>
              <Text>2. 14. ~ 2. 25.</Text>
              <Text>2. 28.</Text>
              <Text>3. 1. ~ 3. 6.</Text>
              <Text>3. 7.</Text>
              <Text>3. 8.</Text>
            </Textbox>
            <Textbox style={{padding: "0px"}}>
              <Text>서류 지원 모집</Text>
              <Text>면접자 공지</Text>
              <Text>면접 진행</Text>
              <Text>최종 합격자 발표</Text>
              <Text>OT (필참)</Text>
            </Textbox>
          </Textbox>
        ) : (
          <></>
        )
      }
    <Message>미래의 퍼비를 응원합니다.</Message>
    </Wrapper>
  );
};

export default MobileDetail;