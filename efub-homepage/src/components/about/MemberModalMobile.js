import React from 'react';
import styled from 'styled-components';
import FixedModalFrame from '../common/BlackModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';

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
    @media (max-width: 768px) {
        // phone
       }
`
const SubContent = styled.div` 
    display: flex;
    width:100%;
    @media (max-width: 768px) {
        // phone
       }
`
const SubContent_member = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
    // phone
    }
`

const Ay_neon = styled.img`
    width: 130px; height: 120px;
    position: absolute;
    top: -10px; left: 0px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        width: 150px; height: 130px;
        top: -10px; left: -10px;
      }

    @media (max-width: 768px) {
        // phone
        width: 150px; height: 130px;
        top: -10px; left: -10px;
       }
`

const Hr_neon = styled.img`
    width: 140px; height: 120px;
    position: absolute;
    top: -10px; left: 280px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        top: -10px; left: 200px;
      }

    @media (max-width: 768px) {
        // phone
        top: -10px; left: 200px;
       }
`
const Hj_neon = styled.img`
    width: 150px; height: 100px;
    position: absolute;
    top: -10px; left: 680px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        top: -10px; left: 530px;
      }

    @media (max-width: 768px) {
        // phone
        top: -10px; left: 530px;
       }
`
const Yj_neon = styled.img`
    width: 130px; height: 150px;
    position: absolute;
    top: 300px; left: -20px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        width: 150px; height: 150px;
        top: 230px; left: -30px;
      }

    @media (max-width: 768px) {
        // phone
        top: 230px; left: -20px;
       }
`

const Je_neon = styled.img`
    width: 130px; height: 130px;
    position: absolute;
    top: 300px; left: 430px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        top: 250px; left: 350px;
      }

    @media (max-width: 768px) {
        // phone
        top: 250px; left: 350px;
       }
`
const Cr_neon = styled.img`
    width: 230px; height: 130px;
    position: absolute;
    top: 330px; left: 600px;
    // transform: rotate( 10deg );

    @media (min-width: 768px) and (max-width: 1024px) {
        // between
        top: 280px; left: 460px;
      }

    @media (max-width: 768px) {
        // phone
        top: 280px; left: 450px;
       }
`


const MemberModalMobile = ({ _handleModal }) => {
    return (
        <ModalFrameMobile _handleModal={_handleModal}>
            <Title>EFUB organizers</Title>
            <ScrollDiv>
                <First> 1기 </First>
            <Content>
                <SubContent>
                    <Ay_neon src={ay_neon}></Ay_neon>
                    <Hr_neon src={hr_neon}></Hr_neon>
                    <Hj_neon src={hj_neon}></Hj_neon>
                    <Yj_neon src={yj_neon}></Yj_neon>
                    <Je_neon src={je_neon}></Je_neon>
                    <Cr_neon src={cr_neon}></Cr_neon>
                </SubContent>

                <SubContent>
                    <MemberList> </MemberList>
                </SubContent>
            </Content>

            </ScrollDiv>
        </ModalFrameMobile>
    );
};

export default MemberModalMobile;