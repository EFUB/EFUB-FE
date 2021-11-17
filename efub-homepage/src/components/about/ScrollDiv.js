import React from 'react';
import styled from 'styled-components';

const Scroll = styled.div`
    overflow: scroll;
    width: 100%;
    height: 25rem;
    background-color: rgba(255, 255, 255, 0.15);
`;

const ScrollDiv = ({ children }) => {
    return (
        <Scroll>
            {children}
        </Scroll>
    );
};

export default ScrollDiv;