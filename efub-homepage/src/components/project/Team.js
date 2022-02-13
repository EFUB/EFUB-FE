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
  @media (max-width: 1023px) {
    margin: 0rem;
    width: 150px;
    font-size: 0.9rem;
    line-height: 1.75rem;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
    width: 13rem;
    margin: 0.2rem 0;
  }
`;

const Names = styled.div`
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0.625rem 0rem;
  @media (max-width: 1023px) {
    margin: 0rem;
    min-width: 180px;
    font-size: 0.9rem;
    line-height: 1.75rem;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
    width: 100%;
    margin: 0.2rem 0;
  }
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
