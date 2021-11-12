import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import FixedModalFrame from '../common/FixedModalFrame';
import CurriButtonList from './CurriButtonList';
import ScrollDiv from './ScrollDiv';

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;

const CurriModal = ({ _handleModal }) => {
    const [select, setSelect] = useState('win');
    const onSelect = useCallback(select => setSelect(select), []);
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB Curriculum</Title>
            <CurriButtonList select={select} onSelect={onSelect} ></CurriButtonList>
            <ScrollDiv />
        </FixedModalFrame>
    );
};

export default CurriModal;