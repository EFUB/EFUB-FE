import React from "react";
import styled from "styled-components";
import radiobuttonTrue from "../../assets/recruitment/radiobutton/radiobutton-true.png";
import radiobuttonFalse from "../../assets/recruitment/radiobutton/radiobutton-false.png";

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const RadioButton = ({ checked, onClick }) => (
  <>
    {
      checked ?
        <Image onClick={onClick} src={radiobuttonTrue} alt="radiobuttonTrue" /> :
        <Image onClick={onClick} src={radiobuttonFalse} alt="radiobuttonFalse" />
    }
  </>
);

export default RadioButton;

