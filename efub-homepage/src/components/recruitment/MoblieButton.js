import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Moblie from "../../assets/recruitment/moblie.png";

const ButtonImg = styled.img`
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-top: 2rem;
  }
`;

const MoblieButton = () => {
  return (
    <Link to="/list">
      <ButtonImg
        alt="모바일버튼"
        src={Moblie}
        // onClick={() => alert("지원서는 PC에서만 작성 가능합니다.")}
      />
    </Link>
  );
};

export default MoblieButton;
