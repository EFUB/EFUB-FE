import React from "react";
import styled from "styled-components";
import RadioButton from "./RadioButton";

const Wrapper = styled.div`
    margin-left: 8rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: row;
    width: 25rem;
    justify-content: space-between;
`;

const Score = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5rem;
`;

const Text = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
`;

const Confident = ({ score, onClickScore }) => {
    return (
        <Wrapper>
            <Score>
                <Text>1</Text>
                <RadioButton checked={score === 1} onClick={() => { onClickScore(1) }} />
            </Score>
            <Score>
                <Text>2</Text>
                <RadioButton checked={score === 2} onClick={() => { onClickScore(2) }} />
            </Score>
            <Score>
                <Text>3</Text>
                <RadioButton checked={score === 3} onClick={() => { onClickScore(3) }} />
            </Score>
            <Score>
                <Text>4</Text>
                <RadioButton checked={score === 4} onClick={() => { onClickScore(4) }} />
            </Score>
            <Score>
                <Text>5</Text>
                <RadioButton checked={score === 5} onClick={() => { onClickScore(5) }} />
            </Score>
        </Wrapper>
    );
};

export default Confident;
