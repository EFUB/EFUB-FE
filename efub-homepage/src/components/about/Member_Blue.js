import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
    height:auto;
    @media (max-width: 768px){
        width: 100%;
      }
`

const MemberBox=styled.div`
    background: #1C1C1C;
    height: 10rem;
    width: 10rem;
    border-radius: 10px;
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height:160%;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 7rem;
        width: 7rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
      @media (max-width: 768px){
        height: 8rem;
        width: 8rem;
        margin-right: 0.3rem;
        margin-left: 0.3rem;
      }
`
const PositionText=styled.div`
    color:#52F4FF;
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30%;
    width:100%;
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 20%;
      }
    @media (max-width: 768px){
        margin-top: 25%;
        font-size: 18px;
      }
`

const NameText=styled.div`
    color:white;
    font-size: 28px;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25%;
    width:100%;
    @media (max-width: 768px){
        font-size: 25px;
      }
`

function Member({position, name}) {
    return (
        <Wrapper>
            <MemberBox>
                <PositionText> {position} </PositionText>
                <NameText> {name} </NameText>
            </MemberBox>
        </Wrapper>

    )
}

export default Member;
