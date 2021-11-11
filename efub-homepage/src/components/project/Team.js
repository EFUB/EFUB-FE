import React from 'react';
import styled from 'styled-components';

const TeamBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const Position = styled.div`
    width: 14rem;
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0.625rem 0rem;
`;

const Names = styled.div`
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0.625rem 0rem;
`;

const Team = ({ team }) => {
    return (
        <TeamBlock>
            <Position>{team.position}</Position>
            <Names>{team.names}</Names>
        </TeamBlock>
    );
};

export default Team;