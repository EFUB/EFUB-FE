import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import MoblieButton from "./MoblieButton";

import Arrow from "../../assets/recruitment/arrow.png";

const BannerBlock = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    height: 40rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const RecruitBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35rem;
  padding: 1rem 5rem 1rem 5rem;
  background-color: rgba(225, 225, 225, 0.15);
  border-radius: 10px;
  /* @media (max-width: 1120px) {
    width: 768px;
  } */
  @media (max-width: 767px) {
    height: 21rem;
    padding: 1rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  align-items: flex-start;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  height: 20rem;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
  @media (max-width: 1120px) {
    margin-top: 2rem;
  }
`;

const ButtonItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 9rem;
  justify-content: space-between;
  align-items: center;
`;

const ListBox = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  text-align: end;
`;

const Text = styled.div`
  font-size: ${(props) => props.size || "30px"};
  font-family: ${(props) => props.font || "Montserrat"};
  margin-bottom: ${(props) => props.margin || "0px"};
  font-weight: bold;
  @media (max-width: 1120px) {
    font-size: ${(props) => props.small || "20px"};
  }
`;

const buttons = [
  {
    name: "developer",
    text: "개발자로 지원하기",
    link: "/developer-apply",
  },
  {
    name: "designer",
    text: "디자이너로 지원하기",
    link: "/designer-apply",
  },
];

const Banner = () => {
  return (
    <BannerBlock>
      <Title>RECRUITMENT</Title>
      <RecruitBox>
        <TextBox>
          <Text margin="30px">EFUB 1st Recruiting</Text>
          <Text size="60px" small="35px">
            EWHA
          </Text>
          <Text size="60px" small="35px">
            FRONT-END
          </Text>
          <Text size="60px" small="35px">
            UI/UX
          </Text>
          <Text size="60px" small="35px" margin="30px">
            BACK-END
          </Text>
          <Text size="20px" small="12px" font="Roboto" margin="15px">
            지원분야 | UI/UX 디자인, 프론트/백엔드 개발
          </Text>
          <Text size="20px" small="12px" font="Roboto">
            모집기간 | 2021/09/01 ~ 09/07 23:59까지
          </Text>
        </TextBox>
        {/* <TextBox>
          <Text margin="30px">EFUB 1st Recruiting</Text>
          <Text lg="60px" xs="30px">
            EWHA
          </Text>
          <Text lg="60px" xs="30px">
            FRONT-END
          </Text>
          <Text lg="60px" xs="30px">
            UI/UX
          </Text>
          <Text lg="60px" margin="30px" xs="30px">
            BACK-END
          </Text>
          <Text lg="20px" xs="12px" font="Roboto" margin="15px">
            지원분야 | UI/UX 디자인, 프론트/백엔드 개발
          </Text>
          <Text lg="20px" xs="12px" font="Roboto">
            모집기간 | 2021/09/01 ~ 09/07 23:59까지
          </Text>
        </TextBox> */}
        <ButtonBox>
          <Link to="/list">
            <ListBox>
              <div>
                <Text size="30px" font="Roboto">
                  합격자 조회
                </Text>
                <Text size="30px" font="Roboto">
                  바로가기
                </Text>
              </div>
              <img src={Arrow} alt="arrow" />
            </ListBox>
          </Link>
          <ButtonItems>
            {buttons.map((b) => (
              <Link to={b.link}>
                <Button width="15" height="4" filled>
                  {b.text}
                </Button>
              </Link>
            ))}
          </ButtonItems>
        </ButtonBox>
      </RecruitBox>
      <MoblieButton />
    </BannerBlock>
  );
};

export default Banner;
