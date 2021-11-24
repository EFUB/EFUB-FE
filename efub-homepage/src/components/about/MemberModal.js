import React from 'react';
import styled from 'styled-components';
import FixedModalFrame from '../common/BlackModalFrame';
import ScrollDiv from './ScrollDiv_Black';
import MemberList from './MemberList';

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;
const First = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 2rem;
    margin-left: 2rem;
`;

const Content = styled.div` 
    display: flex;
    position: relative;
    width:100%;
    @media (max-width: 768px) {
        // phone
       }
`

const MemberModal = ({ _handleModal }) => {
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB organizers</Title>
            <ScrollDiv>
                <First> 1기 </First>
            <Content>
            <MemberList> </MemberList>
            </Content>

            </ScrollDiv>
        </FixedModalFrame>
    );
};

export default MemberModal;