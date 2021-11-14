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

const MemberModal = ({ _handleModal }) => {
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB organizers</Title>
            <ScrollDiv>
            <MemberList> </MemberList>
            </ScrollDiv>
        </FixedModalFrame>
    );
};

export default MemberModal;