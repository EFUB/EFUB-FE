import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const buttons = [
    {
        name: 'BE',
        text: 'Back-end'
    },
    {
        name: 'FE',
        text: 'Front-end'
    },
    {
        name: 'Design',
        text: 'Design'
    },
];

const ButtonBlock = styled.div`
    margin-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
      }
`;

const CurriButtonList = ({ select, onSelect }) => {
    return (
        <ButtonBlock>
            {buttons.map(b => (
                <Button
                    width="11"
                    round blue
                    filled={b.name === select}
                    onClick={() => onSelect(b.name)}
                    style={{ marginRight: 15 }}
                >
                    {b.text}
                </Button>
            ))}
        </ButtonBlock>
    )
};

export default CurriButtonList;