import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CareerBlock = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
`

const Career = styled.div`
    color:white;
    font-size:  ${props => props.size || 22}px;
    font-family: 'Roboto', sans-serif;
    line-height:180%;
`;

const Careers = {
    win: [
        { id: 1, name: '2021 우리은행 온(ON)택트 해커톤 대회 최우수상 수상'},
    ],
    job: [
        { id: 1, name: '2021 SKT 인턴'},
        { id: 2, name: '2021 LG 전자 인턴' },
        { id: 3, name: '2021 카카오엔터테인먼트 인턴'},
        { id: 4, name: '2021 샤넬 코리아 인턴'},
        { id: 5, name: '2021 데이터 마케팅 코리아 인턴'},
    ],
    // second: [

    // ],
}

const CareerContent = ({ select }) => {
    const [selectedCareers, setSelectedCareers] = useState(Careers.win);

    useEffect(() => {
        setSelectedCareers(Careers[select]);
    }, [select]);

    return (
        <CareerBlock>
            {selectedCareers.map(s => (
                <Career key={s.id}> {s.name} </Career>
            ))}
        </CareerBlock>
    );
};

export default CareerContent;
