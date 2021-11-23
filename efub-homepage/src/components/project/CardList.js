import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import cards from '../../assets/project/cards';
import { useMediaQuery } from 'react-responsive';

const CardBlock = styled(Responsive)`
    align-content: center;
    gap: 1rem;
    display: grid;
    width: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 1023px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Card = styled.div`
    position: relative;
    cursor: pointer;
    height: 16rem;
    width: 16rem;
    @media (max-width: 1023px) {
        height: 13rem;
        width: 13rem;
    }
    @media (max-width: 767px) {
        height: 12rem;
        width: 10rem;
    }
`;

const Title = styled.div`
    font-size: 0.8rem;
    color: white;
    width: 10rem;
`;

const CardImage = styled.img`
    height: 16rem;
    width: 16rem;
    @media (max-width: 1023px) {
        height: 13rem;
        width: 13rem;
    }
    @media (max-width: 767px) {
        height: 10rem;
        width: 10rem;
    }
`;

const CardHover = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    height: 16rem;
    width: 16rem;
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-bottom: 1rem;
    background-color: black;
    opacity: 0;
    :hover{
        opacity: 0.45;
    }
    @media (max-width: 1023px) {
        height: 13rem;
        width: 13rem;
    }
    @media (max-width: 767px) {
        height: 10rem;
        width: 10rem;
    }
`

// 버튼 select시 handleClick할 수 있는 카드 리스트가 나온다.
const CardList = ({ select, _handleClick }) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });
    const [selectedCards, setSelectedCards] = useState(cards.all);

    useEffect(() => {
        setSelectedCards(cards[select]);
    }, [select]);

    return (
        <>
            {
                isMobile ? (
                    <CardBlock>
                        {selectedCards.map(s => (
                            <>
                                <Card key={s.id} onClick={() => _handleClick(s.id)}>
                                    <CardImage src={s.file} alt={s.file} />
                                    <Title>{s.name}</Title>
                                </Card>
                            </>
                        ))}
                    </CardBlock>
                ) : (
                    <CardBlock>
                        {selectedCards.map(s => (
                            <Card key={s.id} onClick={() => _handleClick(s.id)}>
                                <CardImage src={s.file} alt={s.file} />
                                <CardHover>{s.name}</CardHover>
                            </Card>
                        ))}
                    </CardBlock>
                )
            }
        </>

    );
};

export default CardList;
