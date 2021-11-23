import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../../components/recruitment/Banner";
import Left from "../../assets/recruitment/Left.png";
import Right from "../../assets/recruitment/Right.png";
import Detail from "../../components/recruitment/Detail";

const BackgroundImg = styled.img`
  width: 20rem;
  top: 60rem;
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  z-index: 90;
  position: absolute;
  @media (max-width: 767px) {
    display: none;
  }
`;

const RecruitmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <BackgroundImg src={Left} alt="leftImg" left="0" />
      <BackgroundImg src={Right} alt="rightImg" right="0" />
      <Detail />
    </>
  );
};

export default RecruitmentPage;
