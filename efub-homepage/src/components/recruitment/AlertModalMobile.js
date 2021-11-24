import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import AlertModal from '../common/AlertModal';
import Button from '../common/Button';

const Description = styled.div`
    width: 100%; 
    font-size: 1rem;
    font-weight: 400;
`;

const AlertModalMobile = ({ _handleModal }) => {
    return (
        <AlertModal _handleModal={_handleModal}>
            <Description>PC로 지원 부탁드립니다.</Description>
            <Button onClick={_handleModal}>확인</Button>
        </AlertModal>
    );
};

export default AlertModalMobile;
