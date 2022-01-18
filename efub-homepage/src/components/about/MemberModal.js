import React from 'react';
import styled from 'styled-components';
import FixedModalFrame from './ModalFrame';

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
`;
const First = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 2rem;
    margin-left: 2rem;
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
       }
`
const SubContent_member = styled.div` 
    z-index: 10;

    display: flex;
    position: relative;
    width:100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
    // phone
    }
`

const Ay_neon = styled.img`
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
        width: 150px; height: 130px;
        top: -10px; left: -10px;
       }
`

const Hr_neon = styled.img`
    width: 140px; height: 120px;
    position: absolute;
    top: -10px; left: 230px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: -10px; left: 220px;
      }

    @media (max-width: 767px) {
        // phone
        top: -10px; left: 200px;
       }
`
const Hj_neon = styled.img`
    width: 150px; height: 100px;
    position: absolute;
    top: -10px; left: 680px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: -10px; left: 680px;
      }

    @media (max-width: 767px) {
        // phone
        top: 260px; left: 20px;
       }
`
const Yj_neon = styled.img`
    width: 130px; height: 150px;
    position: absolute;
    top: 300px; left: -20px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        width: 170px; height: 150px;
        top: 290px; left: -50px;
      }

    @media (max-width: 767px) {
        // phone
        top: 250px; left: 220px;
       }
`

const Je_neon = styled.img`
    width: 130px; height: 130px;
    position: absolute;
    top: 300px; left: 430px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        width: 120px; height: 120px;
        top: 310px; left: 420px;
      }

    @media (max-width: 767px) {
        // phone
        top: 550px; left: 150px;
       }
`
const Cr_neon = styled.img`
    width: 230px; height: 130px;
    position: absolute;
    top: 330px; left: 600px;
    // transform: rotate( 10deg );

    @media (max-width: 1023px) {
        // between
        top: 330px; left: 580px;
      }

    @media (max-width: 767px) {
        // phone
        top: 550px; left: 250px;
       }
`


const MemberModal = ({ _handleModal }) => {
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB organizers</Title>
            <ScrollDiv>
                <First> 1기 </First>
            <Content>
                <SubContent_member>
                    <MemberList> </MemberList>
                </SubContent_member>
                <SubContent>
                    <Ay_neon src={ay_neon}></Ay_neon>
                    <Hr_neon src={hr_neon}></Hr_neon>
                    <Hj_neon src={hj_neon}></Hj_neon>
                    <Yj_neon src={yj_neon}></Yj_neon>
                    <Je_neon src={je_neon}></Je_neon>
                    <Cr_neon src={cr_neon}></Cr_neon>
                </SubContent>
            </Content>

            </ScrollDiv>
        </FixedModalFrame>
    );
};

export default MemberModal;