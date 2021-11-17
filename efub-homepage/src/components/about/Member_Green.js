import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:50%;
    height:auto;
`

const MemberBox=styled.div`
    background: #1C1C1C;
    height: 10rem;
    width: 10rem;
    font-size: 20px;
    border-radius: 10px;
    margin-right: 1rem;
    margin-left: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height:160%;
`
const PositionText=styled.div`
    color:#C3F474;
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25%;
    width:100%;
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
