import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

import logo from '../assets/about/efub_logo.gif';
import mvp1 from '../assets/about/mvp1.png';
import mvp2 from '../assets/about/mvp2.png';
import mvp3 from '../assets/about/mvp3.png';

import main_blue from '../assets/about/main_blue.png';
import main_circle from '../assets/about/main_circle.png';
import main_green from '../assets/about/main_green.png';
import main_long_tri from '../assets/about/main_long_tri.png';
import main_pink from '../assets/about/main_pink.png';
import main_tri from '../assets/about/main_tri.png';

import organ_green from '../assets/about/organ_green.png';
import organ_pub from '../assets/about/organ_pub.png';
import organ_sun from '../assets/about/organ_sun.png';

import Review1 from '../components/about/Review1';
import Review2 from '../components/about/Review2';
import Member_Green from '../components/about/Member_Green';
import Member_Blue from '../components/about/Member_Blue';

//Modal창
import CareerModal from '../components/about/CareerModal';
import CurriModal from '../components/about/CurriModal';
import MemberModal from '../components/about/MemberModal';

// 한글은 font-family: 'Roboto', sans-serif;
// 영어는 font-family: 'Montserrat', sans-serif;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainWrapper = styled.div` // 이펍소개+버튼들
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20rem;
    width:100%;
    height:300px;
`
const IntroWrapper = styled.div` // 이펍소개
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    width:40%;
    height:100%;
`

const RotateButton = styled.div` // 회전버튼
    display: flex;
    position: relative;
    width:60%;
    height:100%;
`
const SubIntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 2.5rem;
    align-items: left;
    width:100%;
`;

const ReviewWrapper = styled.div` // 퍼비후기
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 5rem;
    width:100%;
    height:auto;
`
const OrganizerWrapper = styled.div` // 이퍼비들 소개
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10rem;
    align-items: left;
    width:100%;
`
const MemberBlock = styled.div`
    margin-bottom: 2rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubMemberBlock = styled.div`
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const AllMemberWrapper = styled.div` // 전체임원진소개
    display: flex;
    position:relative;
    width:40%;
`

const Logo = styled.div`
    width: 228px;
    height: 205px;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainIntroText = styled.div`
    color:white;
    font-size:  ${props => props.size || 48}px;
    font-family: 'Montserrat', sans-serif;
    line-height:120%;
`
const SubIntroText = styled.div`
    color:white;
    font-size:  ${props => props.size || 20}px;
    font-family: 'Roboto', sans-serif;
    line-height:180%;
`
const SubTitle = styled.div`
    color:white;
    font-size:  ${props => props.size || 40}px;
    font-family: 'Roboto', sans-serif;
    ${props =>
        props.eng &&
        css`
            font-family: 'Montserrat', sans-serif;
    `}
    font-weight: bold;
    margin-top: 10rem;
`

const ModalButton_Career = styled.button`
    z-index: 99;
    background: black;
    color:white;
    border: 0;
    outline: 0;
    position: absolute;
    top: 60px; left: 30px;
    font-size:  ${props => props.size || 24}px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transform: rotate( -10deg );
`
const ModalButton_Curriculum = styled.button`
    z-index: 99;
    background: black;
    color:white;
    border: 0;
    outline: 0;
    position: absolute;
    top: 200px; left: 150px;
    font-size:  ${props => props.size || 24}px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transform: rotate( 15deg );
`
const ModalButton_apply = styled.button`
z-index: 99;
    background: black;
    color:white;
    border: 0;
    outline: 0;
    position: absolute;
    top: 80px; left: 370px;
    font-size:  ${props => props.size || 24}px;
    transform: rotate( -15deg );
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;    
`
const ModalButton_allmember = styled.button`
    z-index: 99;
    background: black;
    color:white;
    border: 0;
    outline: 0;
    position: absolute;
    top:70px; left: 30px;
    font-size:  ${props => props.size || 24}px;
    transform: rotate( -15deg );
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-weight: bold;
`
// 이펍 소개 옆 네온 디자인

// main_blue, main_circle, main_green, main_long_tri, main_pink, main_tri 

const Img_main_blue = styled.img`
    width: 350px; height: 130px;
    position: absolute;
    top: 155px; left: 90px;
    transform: rotate( 10deg );
`

const Img_main_circle = styled.img`
    width: 80px; height: 80px;
    position: absolute;
    top: 180px; left: 20px;
    transform: rotate( 10deg );
`
const Img_main_green = styled.img`
    width: 280px; height: 120px;
    position: absolute;
    top: 38px; left: 300px;
    transform: rotate( -6deg );
`

const Img_main_long_tri = styled.img`
    width: 200px; height: 120px;
    position: absolute;
    top: 180px; left: 420px;
    transform: rotate( 5deg );
`

const Img_main_pink = styled.img`
    width: 280px; height: 120px;
    position: absolute;
    top: 18px; left: -20px;
    transform: rotate( -2deg );
`

const Img_main_tri = styled.img`
    width: 80px; height: 80px;
    position: absolute;
    top: 20px; left: 270px;
    transform: rotate( 5deg );
`
//Organizer 밑 네온사인
// organ_green, organ_pub, organ_sun 

const Img_organ_green = styled.img`
    width: 260px; height: 120px;
    position: absolute;
    top: 25px; left: -20px;
    transform: rotate( -5deg );
`
const Img_organ_sun = styled.img`
    width: 150px; height: 150px;
    position: absolute;
    top: -180px; left: 0px;
    transform: rotate( -5deg );
`
const Img_organ_pub = styled.img`
    width: 290px; height: 370px;
    position: absolute;
    top: -220px; left: 180px;
    transform: rotate( 0deg );
`




const AboutPage = () => {
    const [openCareerModal, setOpenCareerModal] = useState(false);
    const _handleCareerModal = () => {
        setOpenCareerModal(!openCareerModal);
        document.body.style.overflow = "unset";
    }
    const [openCurriModal, setOpenCurriModal] = useState(false);
    const _handleCurriModal = () => {
        setOpenCurriModal(!openCurriModal);
        document.body.style.overflow = "unset";
    }
    const [openMemberModal, setOpenMemberModal] = useState(false);
    const _handleMemberModal = () => {
        setOpenMemberModal(!openMemberModal);
        document.body.style.overflow = "unset";
    }

    return (
        <>
            <Wrapper>
                <Logo> <img src={logo} alt="loading..." /> </Logo>

                <MainWrapper>
                    <IntroWrapper>
                        <MainIntroText> EVERYONE'S </MainIntroText>
                        <MainIntroText> FUTURE </MainIntroText>
                        <MainIntroText> UPGRADE </MainIntroText>
                        <MainIntroText> BY EFUB </MainIntroText>
                        <SubIntroWrapper>
                            <SubIntroText> 리드부터 인턴, 프론트에서 백, 디자인까지 </SubIntroText>
                            <SubIntroText> 함께하는 웹 개발 커리어클럽 </SubIntroText>
                        </SubIntroWrapper>
                    </IntroWrapper>
                    <RotateButton>
                        <ModalButton_Career onClick={() => setOpenCareerModal(true)}> EFUB Career  </ModalButton_Career>
                        <ModalButton_Curriculum onClick={() => setOpenCurriModal(true)}> EFUB Curriculum  </ModalButton_Curriculum>
                        
                        <ModalButton_apply> 
                            <Link to='/recruitment'> 2기 지원하기 </Link> </ModalButton_apply>
                        <Img_main_blue src={main_blue}></Img_main_blue>
                        <Img_main_circle src={main_circle}></Img_main_circle>
                        <Img_main_green src={main_green}></Img_main_green>
                        <Img_main_pink src={main_pink}></Img_main_pink>
                        <Img_main_long_tri src={main_long_tri}></Img_main_long_tri>
                        <Img_main_tri src={main_tri}></Img_main_tri>
                    </RotateButton>
                </MainWrapper>

                <SubTitle>1기 우수 활동 퍼비의 활동 후기</SubTitle>

                <ReviewWrapper>
                    <Review1
                        profile={mvp1}
                        text={["안녕하세요! ☺ 저는 처음부터 우수개발자를 목표했던 것은 아니지만, 이펍에서 많이 배워야겠다는 마음으로 부족한 실력이지만 여기저기 열심히 참여하고 다녔더니 우수개발자라는 영광스러운 타이틀을 받을 수 있었던 것 같습니다! 우수 개발자라고 해서 실력순으로 선발되는 것은 아니니, 새로운 퍼비분들 마구 참여하면서 우수개발자 한 번 도전해보세요! 이번 기수의 우수개발자는 ✨아주 멋진 이펍 각인이 들어간 버티컬 마우스✨를 받았답니다…🥺 정말 잘 쓰고 있어요! 실력을 키울 수 있는 이펍에서 많이 배워가시고 활동하시길 바랄게요!", <br/>, "(이로움, Front-end 인턴 개발자)"]}
                    />

                    <Review2
                        profile={mvp2}
                        text={["이화인 개발자들과 소통하고 교류할 수 있는 장을 만들어주신 이펍 1기 임원진 분들께 진심으로 감사드립니다. 우수 개발자로 선정되려고 열심히 활동한 것은 아니었지만, 그간의 노력에 대한 보상을 받은 것 같아 뿌듯합니다. 이펍 로고가 각인된 특별한 마우스도 잘 쓰겠습니다.", <br/>,"(박현아, Back-end 개발자)"]}
                    />

                    <Review1
                        profile={mvp3}
                        text={["웹개발에 대해 하나도 모르는 초보 개발자였는데,  EFUB에서 열리는 다양한 세미나와 프로젝트 덕분에 많이 성장하게 된 것 같습니다. 그리고 기초부터 심화까지 알려주는 커리큘럼과 리드/인턴에 맞는 토이 프로젝트 배치 덕분에 프로젝트에 대한 부담 없이 재미있게 개발할 수 있었습니다. 정말 EFUB은 올해 최고의 선택이었던 것 같습니다☺ ",<br/>,"(강민지, 인턴 개발자)"]}
                    />
                </ReviewWrapper>

                <SubTitle>EFUB ORGANIZER</SubTitle>

                <OrganizerWrapper>
                    <MemberBlock>
                        <SubMemberBlock>
                            <Member_Green
                                name={"정아연"}
                                position={"회장"}
                            />
                            <Member_Green
                                name={"김혜린"}
                                position={"부회장"}
                            />
                            <Member_Green
                                name={"윤효정"}
                                position={"총무"}
                            />
                        </SubMemberBlock>

                        <SubMemberBlock>
                            <Member_Blue
                                name={"이윤지"}
                                position={"프론트장"}
                            />
                            <Member_Blue
                                name={"김정은"}
                                position={"백엔드장"}
                            />
                            <Member_Blue
                                name={"김채령"}
                                position={"디자이너장"}
                            />
                        </SubMemberBlock>
                    </MemberBlock>
                    <AllMemberWrapper>
                        <ModalButton_allmember onClick={() => setOpenMemberModal(true)}> 전체 임원 보기  </ModalButton_allmember>
                        <Img_organ_green src={organ_green}></Img_organ_green>
                        <Img_organ_sun src={organ_sun}></Img_organ_sun>
                        <Img_organ_pub src={organ_pub}></Img_organ_pub>


                    </AllMemberWrapper>
                </OrganizerWrapper>
            </Wrapper>
            {openCareerModal && (
                <CareerModal _handleModal={_handleCareerModal} />
            )}
            {openCurriModal && (
                <CurriModal _handleModal={_handleCurriModal} />
            )}
            {openMemberModal && (
                <MemberModal _handleModal={_handleMemberModal} />
            )}
        </>
    );
};

export default AboutPage;