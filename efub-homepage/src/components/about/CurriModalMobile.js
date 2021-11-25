import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ModalFrameMobile from '../common/ModalFrameMobile';

import CurriButtonList from './CurriButtonList';
import CurriContent from './CurriContent'

import ScrollDiv from './ScrollDiv';

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;

const CurriModalMobile = ({ _handleModal }) => {
    const [select, setSelect] = useState('BE');
    const onSelect = useCallback(select => setSelect(select), []);
    return (
        <ModalFrameMobile _handleModal={_handleModal}>
            <Title>EFUB Curriculum</Title>
            <CurriButtonList select={select} onSelect={onSelect} ></CurriButtonList>
            <ScrollDiv>
            <CurriContent select={select}/>
            </ScrollDiv>
        </ModalFrameMobile>
    );
};

export default CurriModalMobile;