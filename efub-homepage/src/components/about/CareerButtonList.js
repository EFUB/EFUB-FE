import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const buttons = [
    {
        name: 'win',
        text: '수상실적'
    },
    {
        name: 'job',
        text: '인턴 및 취업'
    },
];

const ButtonBlock = styled.div`
    margin-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const CareerButtonList = ({ select, onSelect }) => {
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

export default CareerButtonList;