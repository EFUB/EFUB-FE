import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height || "15rem"};
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const StyledInput = styled.textarea`
  resize: none;
  overflow: scroll;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;
  font-size: 1.25rem;
  font-family: "NotoSans";
  &::placeholder {
    color: #c4c4c4;
    font-weight: bold;
  }
`;

const Input = ({ name, value, placeholder, onChange, height }) => {
  return (
    <StyledDiv height={height} >
      <StyledInput name={name} value={value} onChange={onChange} placeholder={placeholder || "내용을 입력해주세요."} />
    </StyledDiv>
  );
};

export default Input;