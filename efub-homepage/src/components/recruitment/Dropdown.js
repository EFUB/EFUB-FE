import React from 'react';
import styled from 'styled-components';
import up from '../../assets/recruitment/up.png';
import down from '../../assets/recruitment/down.png';

const Box = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.15);
  border-radius: 10px;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`;

const Dropdown = ({ onClick, title, open }) => {
  return (
    <>
      <Box onClick={onClick}>
        <Text>{title}</Text>
        {open ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
      </Box>
    </>
  );
};

export default Dropdown;
