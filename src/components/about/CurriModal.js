import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ModalFrame from '../common/ModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';
import Button from '../common/Button';
import { TitleText } from '../../lib/styles/styledAbout';

const CurriModal = ({ position, _handleModal }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const [buttons, setButtons] = useState([true, false, false]);
  const _handleSelect = (index) => {
    if (index === 0) setButtons([true, false], false);
    else if (index === 1) setButtons([false, true, false]);
    else setButtons([false, false, true]);
  };
  return (
    <>
      {isMobile ? (
        <ModalMobile inner top={position} _handleModal={_handleModal}>
          <TitleText eng style={{ marginTop: '40px' }}>
            EFUB Curriculum
          </TitleText>
          <ButtonWrapper>
            <Button
              round
              eng
              small
              blue
              width="6"
              filled={buttons[0]}
              onClick={() => _handleSelect(0)}
              style={{ fontSize: '12px', marginRight: '10px' }}
            >
              FrontEnd
            </Button>
            <Button
              round
              eng
              small
              blue
              width="6"
              filled={buttons[1]}
              onClick={() => _handleSelect(1)}
              style={{ fontSize: '12px', marginRight: '10px' }}
            >
              BackEnd
            </Button>
            <Button
              round
              eng
              small
              blue
              width="6"
              filled={buttons[2]}
              onClick={() => _handleSelect(2)}
              style={{ fontSize: '12px' }}
            >
              Designer
            </Button>
          </ButtonWrapper>
          <ScrollBox style={{ height: '60vh' }}>
            {buttons[0] ? (
              <>
                {front.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            ) : buttons[1] ? (
              <>
                {back.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            ) : (
              <>
                {design.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            )}
          </ScrollBox>
        </ModalMobile>
      ) : (
        <Modal
          inner
          top={position}
          style={{ padding: '3rem' }}
          _handleModal={_handleModal}
        >
          <TitleText eng style={{ fontSize: '30px' }}>
            EFUB Curriculum
          </TitleText>
          <ButtonWrapper>
            <Button
              round
              blue
              width="10"
              filled={buttons[0]}
              onClick={() => _handleSelect(0)}
              style={{ marginRight: '20px' }}
            >
              FrontEnd
            </Button>
            <Button
              round
              blue
              width="10"
              filled={buttons[1]}
              onClick={() => _handleSelect(1)}
              style={{ marginRight: '20px' }}
            >
              BackEnd
            </Button>
            <Button
              round
              blue
              width="10"
              filled={buttons[2]}
              onClick={() => _handleSelect(2)}
            >
              Designer
            </Button>
          </ButtonWrapper>
          <ScrollBox>
            <Line
              style={{ borderBottom: '1px solid gray', marginBottom: '10px' }}
            >
              <Week>주차</Week>
              <Subject style={{ fontWeight: 'bold', justifyContent: 'center' }}>
                주제
              </Subject>
            </Line>
            {buttons[0] ? (
              <>
                {front.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            ) : buttons[1] ? (
              <>
                {back.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            ) : (
              <>
                {design.map((item) => {
                  return (
                    <Line>
                      <Week>{item.week}</Week>
                      <Subject>{item.subject}</Subject>
                    </Line>
                  );
                })}
              </>
            )}
          </ScrollBox>
        </Modal>
      )}
    </>
  );
};

export default CurriModal;

const Modal = styled(ModalFrame)`
  width: 85%;
`;

const ModalMobile = styled(ModalFrameMobile)`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0rem 2rem 0rem;
  @media (max-width: 767px) {
    margin: 3rem 0rem 2rem 0rem;
  }
`;

const ScrollBox = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    display: block;
    width: 5px;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: block;
    width: 5px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    border: 0.1px solid white;
  }
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 60px;
  @media (max-width: 767px) {
    min-height: 50px;
    border-bottom: 1px solid gray;
  }
`;

const Week = styled.div`
  min-width: 150px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-weight: bold;
  @media (max-width: 767px) {
    min-width: 80px;
    font-size: 12px;
  }
`;

const Subject = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const front = [
  { week: '1주차', subject: '브레인스토밍 데이' },
  { week: '2주차', subject: 'FrontEnd 트렌드, React란?' },
  { week: '3주차', subject: 'FrontEnd 개발자 로드맵, HTML&CSS' },
  { week: '4주차', subject: 'JavaScript 필수 문법' },
  { week: '5주차', subject: 'React 기초 (토이프로젝트 시연)' },
  { week: '6주차', subject: 'React Publishing, Router' },
  { week: '7주차', subject: 'React Hooks' },
  {
    week: '8주차',
    subject: 'BackEnd-FrontEnd 합동 토이 프로젝트',
  },
  { week: '9주차', subject: '상태 관리 라이브러리' },
  { week: '10주차', subject: 'GitHub & 배포' },
];

const back = [
  { week: '1주차', subject: '브레인스토밍 데이' },
  {
    week: '2주차',
    subject: 'BackEnd 로드맵 및 Spring 소개',
  },
  { week: '3주차', subject: 'REST API, API 명세서 작성법' },
  { week: '4주차', subject: 'MySQL' },
  { week: '5주차', subject: 'Spring 입문, MVC 패턴' },
  { week: '6주차', subject: '컨테이너, bean, 의존성' },
  { week: '7주차', subject: '테스트 코드 작성법' },
  {
    week: '8주차',
    subject: 'BackEnd-FrontEnd 합동 토이 프로젝트',
  },
  { week: '9주차', subject: 'CI/CD, AWS 배포' },
  { week: '10주차', subject: 'JPA 소개 및 엔티티 매핑' },
  {
    week: '*',
    subject:
      '2학년의 경우, BackEnd 인턴으로 지원 시 동아리 내에서 주최하는 DataBase 스터디 필참',
  },
];

const design = [
  { week: '1주차', subject: '브레인스토밍 데이' },
  {
    week: '2주차',
    subject: '여름 프로젝트 컨셉 발표, Figma 세미나',
  },
  {
    week: '3주차',
    subject: '유저 경험 설계 강의, 여름 프로젝트 컴셉/사용자 리서치',
  },
  { week: '4주차', subject: '브레인스토밍 강의, 여름 프로젝트 워크플로우' },
  { week: '5주차', subject: '프레임 강의, 여름 프로젝트 와이어프레임 1차' },
  { week: '6주차', subject: 'Zeplin 강의, 여름 프로젝트 와이어프레임 2차' },
  { week: '7주차', subject: '여름 프로젝트 페이지 디자인 1차' },
  { week: '8주차', subject: '여름 프로젝트 페이지 디자인 2차' },
  {
    week: '9주차',
    subject: '사용성 평가 및 포트폴리오 강의, 여름 프로젝트 페이지 디자인 3차',
  },
  { week: '10주차', subject: '여름 프로젝트 페이지 디자인 4차' },
  { week: '11주차', subject: '여름 프로젝트 디자인 마감' },
  { week: '*', subject: '포트폴리오 스터디 진행 예정' },
];
