import React from 'react';
import styled from 'styled-components';
import FixedModalFrame from '../common/BlackModalFrame';
import ScrollDiv from './ScrollDiv';

import P_ay from '../../assets/about/profile_ay.png';
import P_cr from '../../assets/about/profile_cr.png';
import P_hj from '../../assets/about/profile_hj.png';
import P_hr from '../../assets/about/profile_hr.png';
import P_je from '../../assets/about/profile_je.png';
import P_yj from '../../assets/about/profile_yj.png';

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;

const MemberModal = ({ _handleModal }) => {
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB Organizer</Title>
            <ScrollDiv />
        </FixedModalFrame>
    );
};

export default MemberModal;