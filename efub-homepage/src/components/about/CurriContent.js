import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurriBlock = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
`

const Sub = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(256, 256, 256, 0.15);
`;
const SubWeek = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 55%;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const SubDate = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 25%;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const SubOption = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 20%;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const OneCurri = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    width:100%;
`


const Week = styled.div`
    color:white;
    text-align:left;
    margin-left: 1rem;
    font-size:  ${props => props.size || 18}px;
    font-family: 'Roboto', sans-serif;
    line-height:180%;
    width: 55%;
    @media (max-width: 767px){
        font-size: 15px;
    }
`;

const Date = styled.div`
    color:white;
    text-align:center;
    margin-left: 1rem;
    font-size:  ${props => props.size || 18}px;
    font-family: 'Roboto', sans-serif;
    line-height:180%;
    width: 25%;
    @media (max-width: 767px){
        font-size: 15px;
        width: 30%;
    }
`;

const Option = styled.div`
    color:white;
    text-align:left;
    margin-left: 1rem;
    font-size:  ${props => props.size || 18}px;
    font-family: 'Roboto', sans-serif;
    line-height:180%;
    width: 20%;
    @media (max-width: 767px){
        font-size: 15px;
        width: 15%;
    }
`;



const Curris = {
    FE: [
        { id: 1, week: 'OT', date: '2021년 9월 11일', option: ''},
        { id: 2, week: '1학기 복습', date: '2021년 9월 16일', option: ''},
        { id: 3, week: 'styled-component로 반응형 구현하기 이론 및 실습', date: '2021년 9월 30일', option: ''},
        { id: 4, week: '리덕스 이론 및 리덕스를 이용한 API 연결 실습', date: '2021년 10월 7일', option: ''},
        { id: 5, week: '고급 CSS 기술을 이용한 실습 - 로딩창 및 스크롤 구현', date: '2021년 10월 14일', option: ''},
        { id: 6, week: '프론트엔드 기술면접 이론 및 실습', date: '2021년 11월 11일', option: ''},
    ],
    BE: [
        { id: 1, week: 'OT', date: '2021년 9월 11일', option: ''},
        { id: 2, week: '1학기 복습', date: '2021년 9월 18일', option: ''},
        { id: 3, week: '스프링 시큐리티 개념 및 실습 & JPA  소개', date: '2021년 10월 2일', option: ''},
        { id: 4, week: 'JPA : 영속성 관리', date: '2021년 10월 9일', option: ''},
        { id: 5, week: 'JPA : 매핑', date: '2021년 10월 16일', option: ''},
        { id: 6, week: '객체지향 쿼리 언어, Docker 및 배포', date: '2021년 11월 13일', option: ''},
    ],
    Design: [
        { id: 1, week: 'OT', date: '2021년 9월 11일', option: ''},
        { id: 2, week: 'UX, UI디자인 툴로서 피그마 이해하기', date: '2021년 9월 17일', option: ''},
        { id: 3, week: '피그마로 그리드, 아이콘 만들기 A to Z', date: '2021년 10월 1일', option: ''},
        { id: 4, week: '디자이너를 위한 기초 코딩', date: '2021년 10월 8일', option: ''},
        { id: 5, week: '디자이너를 위한 기초 코딩(2)', date: '2021년 10월 15일', option: ''},
    ],
}

const CurriContent = ({ select }) => {
    const [selectedCurris, setSelectedCurris] = useState(Curris.BE);

    useEffect(() => {
        setSelectedCurris(Curris[select]);
    }, [select]);

    return (
        <CurriBlock>
            <Sub>
                    <SubWeek> 주차 </SubWeek>
                    <SubDate> 일자 </SubDate>
                    <SubOption> 비고 </SubOption>
            </Sub>
            {selectedCurris.map(s => (
                <OneCurri>
                <Week key={s.id}> {s.week} </Week>
                <Date key={s.id}> {s.date} </Date>
                <Option key={s.id}> {s.option} </Option>
                </OneCurri>
            ))}
        </CurriBlock>
    );
};

export default CurriContent;
