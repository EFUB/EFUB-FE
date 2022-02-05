import React from 'react';
import styled from 'styled-components';
import graphic from '../../assets/recruitment/Mobile.png';

const BannerBlock = styled.div`
    width: 100%;
    padding: 1rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const RecruitBox = styled.div`
  padding: 1.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgba(225, 225, 225, 0.15);
    border-radius: 10px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.div`
    font-size: ${(props) => props.size || "30px"};
    font-family: ${(props) => props.font || "Montserrat"};
    margin-bottom: ${(props) => props.margin || "0px"};
    font-weight: bold;
`;

const MobileBanner = () => {
  return (
    <>
      <BannerBlock>
        <Title>RECRUITMENT</Title>
        <RecruitBox>
          <TextBox>
            <Text size="20px" margin="30px">EFUB 2nd Recruiting</Text>
            <Text>EWHA</Text>
            <Text>FRONTEND</Text>
            <Text>UXUI</Text>
            <Text margin="30px">BACKEND</Text>
            <Text size="15px" font="Roboto" margin="5px">모집분야 | UXUI 디자인, 프론트/백엔드 개발</Text>
            <Text size="15px" font="Roboto">모집기간 | 02/14 ~ 02/25 23:59까지</Text>
          </TextBox>
        </RecruitBox>
      </BannerBlock>
      <img src={graphic} alt="graphic" style={{ width: "100%" }}></img>

    </>

  );
};

export default MobileBanner;