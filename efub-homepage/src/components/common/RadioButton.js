import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import circle from '../../assets/radiobutton/circle.svg';

const Idx = [
    { name: '1', hex: '#C3F474' },
    { name: '2', hex: '#C3F474' },
    { name: '3', hex: '#C3F474' },
    { name: '4', hex: '#C3F474' },
    { name: '5', hex: '#C3F474' },
  ];

const ColorSelectorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 10px;
    border: none;
`
const Label = styled.label`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
`
const CustomRadioButton = styled.input`
    display: none;
    &:checked + ${Label} {
        background: no-repeat ${(props) => props.color};
    }
`;


  export function RadioButton() {
    return (
      <>
      <ColorSelectorContainer>
         {Idx.map((idx) => (
            <div key={idx.name}>
            <input
                id={idx.name}
                type="radio"
                name="color-selector"
                value={idx.name}
            />
            <label htmlFor={idx.name}></label>
            </div>
        ))}
      </ColorSelectorContainer>
      </>
    );
  }