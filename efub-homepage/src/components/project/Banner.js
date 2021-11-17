import React from 'react';
import styled from 'styled-components';
import vector1 from '../../assets/project/vector1.png';
import vector2 from '../../assets/project/vector2.png';

const BannerBlock = styled.div`
    width: 100%;
    position: relative;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        position: absolute;
        top: 0;
        width: 20rem;
        z-index: -1;
    }
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
            <img src={vector1} alt="vector`" style={{ left: -100 }} />
            <img src={vector2} alt="vector2`" style={{ right: -100 }} />
            <Title>PROJECT</Title>
            <Subtitle>개발자와 디자이너가 협업을 통해 만들어나갑니다.</Subtitle>
        </BannerBlock>
    );
};

export default Banner;