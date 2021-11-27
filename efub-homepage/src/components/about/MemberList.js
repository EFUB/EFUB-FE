import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import members from '../../assets/about/members';

const MemberBlock = styled.div`
    gap: 1rem;
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 0.3fr;
    grid-row-gap: 50px;
    @media (max-width: 768px) {
        grid-template-columns: 0.3fr 0.3fr;
        align-items: center;
    }
`;

const Member = styled.div`
    position: relative;
    height: 16.8rem;
    width: 16.8rem;
    @media (max-width: 1120px) {
        height: 13.4rem;
        width: 13.4rem;
    }
    
    margin-bottom: 1rem;
`;

const MemberImage = styled.img`
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius:70%;
    height: 13rem;
    width: 13rem;
    @media (max-width: 1024px) {
        height: 12rem;
        width:  12rem;
    }
`;
const MemberText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
`;

const MemberPosition = styled.div`
    color: #C3F474;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    margin-right: 1rem;
`;

const MemberName = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    position: relative;
`;

const MemberList = () => {
    return (
        <MemberBlock>
            {members.first.map(s => (
                <Member key={s.id}>
                    <MemberImage src={s.file} alt={s.file} />
                    <MemberText>
                        <MemberPosition> {s.position} </MemberPosition>
                        <MemberName> {s.name} </MemberName>
                    </MemberText>
                </Member>
            ))}
        </MemberBlock>
    );
};

export default MemberList;
