import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    overflow:auto; 
`
const Logo = styled.img`
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
`;

const TextBox=styled.div`
    background-color: #1C1C1C;
    border-radius: 10px;
    color:white;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;

    margin-left: 2rem;
    line-height:160%;
    width:80%;
    height: 100%;
`
const Text=styled.div`
    color:white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    ${props =>
        props.eng &&
        css`
            font-family: 'Montserrat', sans-serif;
    `}

    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;

    line-height:160%;
    width:90%;
    height:80%;
    white-space: pre-wrap;
`

function Review1({profile, text}) {
    return (
        <Wrapper>
            <TextBox> 
                <Text>{text}</Text>
            </TextBox> 
            <Logo src={profile}/>
        </Wrapper>

    )
}

export default Review1;
