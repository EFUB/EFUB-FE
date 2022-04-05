import React from 'react';
import styled from 'styled-components';
import checkboxTrue from '../../assets/recruitment/checkbox/checkbox-true.png';
import checkboxFalse from '../../assets/recruitment/checkbox/checkbox-false.png';

const Wrapper = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.div`
  font-size: 1.25rem;
  margin-left: 2.5rem;
  font-family: Roboto;
  font-weight: bold;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Checkbox = ({ label, checked, onToggle }) => (
  <Wrapper>
    {checked ? (
      <Image onClick={onToggle} src={checkboxTrue} alt="checkboxTrue" />
    ) : (
      <Image onClick={onToggle} src={checkboxFalse} alt="checkboxFalse" />
    )}
    <Label>{label}</Label>
  </Wrapper>
);

export default Checkbox;
