import React from 'react';
import styled from 'styled-components';

const BannerBlock = styled.div`
    width: 100%;
    position: relative;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const Subtitle = styled.div`
    font-size: 1.25rem;
    font-family: Roboto;
    margin-bottom: 1.5rem;
`;

const Banner = () => {
    return (
        <BannerBlock>
            <Title>CONTACT</Title>
            <Subtitle>문의 사항을 남겨주시면 이메일로 답변을 보내드립니다.</Subtitle>
        </BannerBlock>
    );
};

export default Banner;