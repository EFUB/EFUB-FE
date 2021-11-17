import React, { useState, useEffect } from "react";
import Banner from '../../components/recruitment/Banner';

import styled from "styled-components";

// import Beer from "../assets/recruitment/beer.png";
// import Bracket from "../assets/recruitment/bracket.png";
// import Circle from "../assets/recruitment/circle.png";
// import Ellipse from "../assets/recruitment/ellipse.png";
// import Like from "../assets/recruitment/like.png";
// import Lines from "../assets/recruitment/lines.png";
// import Sun from "../assets/recruitment/sun.png";
// import Tag from "../assets/recruitment/tag.png";
// import Triangle from "../assets/recruitment/triangle.png";
// import Wave from "../assets/recruitment/wave.png";


const TextBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  margin-top: ${(props) => props.marginTop || "0px"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

const Row = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop || "0px"};
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const DetailText = styled.p`
  width: 28rem;
`;

const BackgroundImg = styled.img`
  position: fixed;
  width: ${(props) => props.width || "3rem"};
  height: ${(props) => props.height || "3rem"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  right: ${(props) => props.right || "0"};
  bottom: ${(props) => props.bottom || "0"};
  z-index: 999;
  position: absolute;
`;



const RecruitmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      {/* <BackgroundImg src={Lines} top="44rem" left="6rem" /> */}
      <TextBox marginTop="4rem" alignItems="center" style={{ width: "80%" }}>
        <h2>이화여대 교내 유일 웹 개발 커리어 클럽 EFUB 모집</h2>
        <TextBox>
          <p>
            이화 웹 개발 커리어 클럽에서 웹 디자이너 및 프론트/백엔드 개발자
            여러분을 모집합니다.
            <br />
            <br />
            <br />
            웹 개발 분야는 크게 프론트엔드와 백엔드, 그리고 디자인으로 나뉩니다.
            EFUB은 각 분야의 리드 개발자와 인턴 개발자를 구분없이 모집하여 이번
            학기에는 인턴 또한 포지션을 정하고, 동아리원 전체가 섞여 개발합니다.
            <br />
            <br />
            <br />
            리드는 곧장 프로젝트 착수가 가능하고 세미나 주최가 가능한 인원이며,
            인턴은 양쪽 분야의 리드를 보고 학습을 진행해 자신이 어느 쪽의 직무가
            적성에 맞는지 탐색할 수 있습니다. 디자이너 포지션의 경우, 리드
            포지션만을 선발하여 곧장 프로젝트에 착수 가능한 인원을 선발합니다.
          </p>
        </TextBox>
        <Row marginTop="3rem">
          <TextBox>
            <h3>활동 안내</h3>
            <p>
              학기 중 세미나 및 스터디
              <br />
              디자인 | 매주 금요일 20시
              <br />
              프론트엔드 | 매주 목요일 19시 30분
              <br />
              백엔드 | 매주 토요일 09시 30분
            </p>
          </TextBox>
          <TextBox>
            <h3>활동 내역</h3>
            <p>
              인재개발원 공식 수료증
              <br />
              디자이너, 개발자와의 협업 경험
              <br />
              우수 활동자 선정 시 상품 제공
              <br />
              커리어에 도움이 되는 세미나 참여 기회
            </p>
          </TextBox>
        </Row>
        {/* <BackgroundImg
          src={Like}
          width="10rem"
          height="10rem"
          top="80rem"
          left="0rem"
        /> */}
        <TextBox marginTop="3rem" style={{ width: "100%" }}>
          <Row>
            <h3>모집 대상</h3>
            <DetailText>
              학번, 나이, 전공 불문 웹디자인 및 웹 개발에 <br />
              열정이 있는 2학기 이상 이수한 이화인
            </DetailText>
          </Row>
          <Row>
            <h3>지원 방법</h3>
            <DetailText>상단 지원하기 버튼 클릭 후, 지원서 작성</DetailText>
          </Row>
          <Row>
            <h3>우대 사항</h3>
            <DetailText>
              프로젝트 경험이 있거나 기본적인 리액트 지식이 있는 개발자
              <br />
              웹서비스 기획에 관심이 있는 디자이너
              <br />
              2학기 이상 활동 가능자
            </DetailText>
          </Row>
          <Row>
            <h3>모집 알림</h3>
            <DetailText>
              9월 1일 ~ 9월 7일 23시 59분까지 <br />
              9월 8일 서류 합격 발표 및 면접 일정 안내 <br />
              9월 9일 면접 <br />
              9월 10일 최종 합격자 발표 <br />
              9월 11일 OT (필참)
            </DetailText>
          </Row>
          <Row>
            <h3>문의</h3>
            <DetailText>웹페이지 상단 CONTACT에서 문의</DetailText>
          </Row>
        </TextBox>
        <h1 style={{ margin: "6rem" }}>미래의 퍼비를 응원합니다.</h1>
      </TextBox>
    </>
  );
};

export default RecruitmentPage;
