import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
/**
 * 기본값: 빈 녹색 사각형 한글 버튼
 * props
 * - filled: 색 채움
 * - round: 둥근 버튼
 * - blue: green -> blue 색 변경
 * - eng: Roboto -> Montserrat 폰트 변경
 */

const StyledButton = styled.button`
  border: 2px solid ${palette.green};
  color: ${palette.green};
  border-radius: 0.625rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  font-family: ${(props) => (props.eng ? 'Montserrat' : 'Roboto')};
  outline: none;
  cursor: pointer;
  background: transparent;
  padding: ${(props) => (props.small ? '0rem' : '0.7rem 1rem')};
  width: ${(props) => props.width || '6'}rem;
  height: ${(props) => props.height || '3'}rem;

  ${(props) =>
    props.eng &&
    css`
      font-family: 'Montserrat', sans-serif;
    `}

  ${(props) =>
    props.round &&
    css`
      border-radius: 1.5rem;
    `}

    ${(props) =>
    props.filled &&
    css`
      background-color: ${palette.green};
      color: ${palette.black};
    `}

    ${(props) =>
    props.blue &&
    css`
      border: 2px solid ${palette.blue};
      color: ${palette.blue};
    `}

    ${(props) =>
    props.filled &&
    props.blue &&
    css`
      background-color: ${palette.blue};
      color: ${palette.black};
    `}

    @media (max-width: 767px) {
    ${(props) =>
      props.widthXS &&
      css`
        width: 99%;
      `}
  }
`;

const Button = (props) => <StyledButton {...props} />;
export default Button;
