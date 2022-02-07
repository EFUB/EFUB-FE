import React from 'react';
import styled from 'styled-components';
import loading from '../../assets/common/loading.gif';

const Background = styled.div`
  background-color: rgba(255,255,255,0.5);
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Loading = () => {
  return (
    <Background>
      <img src={loading} alt="loading" style={{ width: "20px" }} />
    </Background>
  )
}

export default Loading;
