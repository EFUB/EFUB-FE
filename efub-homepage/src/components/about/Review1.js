import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    height:auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
        // phone
        flex-direction: column;
    }
`
const Logo = styled.img`
    width: 20rem;
    height: 20rem;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
`

function Review1({profile, text}) {
    return (
        <Wrapper>
            <Logo src={profile}/>
            <TextBox> 
                <Text>{text}</Text>
            </TextBox> 
        </Wrapper>

    )
}

export default Review1;
