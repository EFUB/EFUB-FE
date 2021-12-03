import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useMediaQuery } from 'react-responsive';

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
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
`;

const ButtonList = ({ select, onSelect }) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });
    return (
        <>
            {
                isMobile ? (
                    <ButtonBlock>
                        {buttons.map(b => (
                            <Button
                                round blue
                                width="4"
                                filled={b.name === select}
                                onClick={() => onSelect(b.name)}
                                style={{
                                    fontSize: "0.8rem",
                                    marginRight: 10,
                                    height: "2rem",
                                    paddingTop: "0.4rem"
                                }}
                            >
                                {b.text}
                            </Button>
                        ))}
                    </ButtonBlock>) : (
                    <ButtonBlock>
                        {buttons.map(b => (
                            <Button
                                round blue
                                width="8"
                                filled={b.name === select}
                                onClick={() => onSelect(b.name)}
                                style={{ marginRight: 15 }}
                            >
                                {b.text}
                            </Button>
                        ))}
                    </ButtonBlock>
                )
            }
        </>
    );
};

export default ButtonList;