import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const buttons = [
    {
        name: 'all',
        text: '전체'
    },
    {
        name: 'first',
        text: '1기'
    },
    // {
    //     name: 'second',
    //     text: '2기'
    // }
];

const ButtonBlock = styled.div`
    margin-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ButtonList = ({ select, onSelect }) => {
    return (
        <ButtonBlock>
            {buttons.map(b => (
                <Button
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

export default ButtonList;