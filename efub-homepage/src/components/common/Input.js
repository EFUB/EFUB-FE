import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: ${(props) => props.width || 40}rem;
  height: ${(props) => props.height || 4}rem;
  margin-top: ${(props) => props.marginTop || 0}px;
  background-color: rgb(25, 25, 25);
  border-radius: 10px;
  border: 1px solid ${(props) => props.borderColor || "none"};
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.input`
  width: ${(props) => props.inputwidth || 90}%;
  border: none;
  color: white;
  background-color: rgb(25, 25, 25);
  font-size: 20px;
  &::placeholder {
    font-family: "NotoSans";
    color: #c4c4c4;
    font-size: 20px;
  }
  :focus {
    outline: none;
  }
`;

const Input = ({
  children,
  width,
  inputwidth,
  height,
  borderRadius,
  border,
  placeholder,
  marginTop,
  validinput,
  borderColor,
  ...rest
}) => {
  return (
    <StyledDiv
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border}
      marginTop={marginTop}
      borderColor={borderColor}
      {...rest}
    >
      {validinput === "true" ? (
        <StyledInput
          placeholder={placeholder}
          inputwidth={inputwidth}
          {...rest}
        />
      ) : (
        <div></div>
      )}
      {children}
    </StyledDiv>
  );
};

export default Input;
