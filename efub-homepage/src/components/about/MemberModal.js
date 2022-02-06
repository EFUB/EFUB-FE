import React from 'react';
import styled from 'styled-components';
import FixedModalFrame from './MemberModalFrame';

import ScrollDiv from './ScrollDiv_Black';
import MemberList from './MemberList';

import cr_neon from '../../assets/about/cr_neon.png';
import ay_neon from '../../assets/about/ay_neon.png';
import hj_neon from '../../assets/about/hj_neon.png';
import hr_neon from '../../assets/about/hr_neon.png';
import je_neon from '../../assets/about/je_neon.png';
import yj_neon from '../../assets/about/yj_neon.png';


const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;

    @media (max-width: 767px){
        font-size: 2rem;
    }
`;
const First = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 2rem;
    margin-left: 2rem;

    @media (max-width: 767px){
        font-size: 2rem;
    }
`;

const Content = styled.div` 
    display: flex;
    position: relative;
    width:100%;
    @media (max-width: 767px) {
        // phone
       }
`
const SubContent = styled.div` 
    z-index: 0;
    display: flex;
    width:100%;
    
    @media (max-width: 767px) {
        // phone
        display:none;
       }
`
const SubContentMember = styled.div` 
    z-index: 10;

    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
    // phone
    }
`

const AyNeon = styled.img`
    width: 130px; height: 120px;
    position: absolute;
    top: -10px; left: 0px;
    z-index: 0;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        width: 150px; height: 130px;
        top: -10px; left: -10px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`

const HrNeon = styled.img`
    width: 140px; height: 120px;
    position: absolute;
    top: -10px; left: 230px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: -10px; left: 200px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`
const HjNeon = styled.img`
    width: 150px; height: 100px;
    position: absolute;
    top: -10px; left: 680px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: -10px; left: 550px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`
const YjNeon = styled.img`
    width: 130px; height: 150px;
    position: absolute;
    top: 300px; left: -20px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        width: 190px; height: 170px;
        top: 230px; left: -70px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`

const JeNeon = styled.img`
    width: 130px; height: 130px;
    position: absolute;
    top: 300px; left: 430px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        width: 120px; height: 120px;
        top: 250px; left: 330px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`
const CrNeon = styled.img`
    width: 230px; height: 130px;
    position: absolute;
    top: 330px; left: 600px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: 300px; left: 450px;
      }

    @media (max-width: 767px) {
        // phone
        display:none;
       }
`


const MemberModal = ({ _handleModal }) => {
    const top = window.pageYOffset;
    return (
        <FixedModalFrame _handleModal={_handleModal} top={top} >
            <Title>EFUB organizers</Title>
            <ScrollDiv>
                <First> 1기 </First>
            <Content>
                <SubContentMember>
                    <MemberList> </MemberList>
                </SubContentMember>
                <SubContent>
                    <AyNeon src={ay_neon}></AyNeon>
                    <HrNeon src={hr_neon}></HrNeon>
                    <HjNeon src={hj_neon}></HjNeon>
                    <YjNeon src={yj_neon}></YjNeon>
                    <JeNeon src={je_neon}></JeNeon>
                    <CrNeon src={cr_neon}></CrNeon>
                </SubContent>
            </Content>

            </ScrollDiv>
        </FixedModalFrame>
    );
};

export default MemberModal;