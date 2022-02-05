import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Label = styled.div`
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    font-size: 1.25rem;
    font-weight: 500;
    border: none;
    background: black;
    border-bottom: 2px solid white;
    color: white;
    outline: none;
    width: 100%;
    padding-bottom: 0.5rem;
    margin-bottom: 4rem;
`;

const InputLine = ({ name, value, label, placeholder, onChange }) => {
    return (
        <Wrapper autocomplete="off">
            <Label>{label}</Label>
            <Input name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </Wrapper>
    );
};

export default InputLine;