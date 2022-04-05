import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { TitleText, Text } from '../../lib/styles/styledAbout';
import palette from '../../lib/styles/palette';
import reviewer1 from '../../assets/about/reviewer1.png';
import reviewer2 from '../../assets/about/reviewer2.png';
import reviewer3 from '../../assets/about/reviewer3.png';
import up from '../../assets/recruitment/up.png';
import down from '../../assets/recruitment/down.png';

const Review = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const [detail, setDetail] = useState(false);
  const _handleClick = () => {
    setDetail(!detail);
  };

  return (
    <>
      {isMobile && (
        <DropdownContainer onClick={_handleClick}>
          <DropdownText>1기&nbsp;</DropdownText>
          <DropdownText green>우수 활동 퍼비</DropdownText>
          <DropdownText>의 활동 후기</DropdownText>
          {detail ? (
            <DropdownImg src={up} alt="up" />
          ) : (
            <DropdownImg src={down} alt="down" />
          )}
        </DropdownContainer>
      )}
      {(isMobile && detail) || (!isMobile && !detail) ? (
        <>
          {isMobile ? (
            <></>
          ) : (
            <TitleContainer>
              <TitleText>1기&nbsp;</TitleText>
              <TitleText green>우수 활동 퍼비</TitleText>
              <TitleText>의 활동 후기</TitleText>
            </TitleContainer>
          )}
          <ReviewContainer>
            <Reviewer src={reviewer1} />
            <ContentBox>
              <Text>
                안녕하세요! ☺ 저는 처음부터 우수개발자를 목표했던 것은 아니지만,
                이펍에서 많이 배워야겠다는 마음으로 부족한 실력이지만 여기저기
                열심히 참여하고 다녔더니 우수개발자라는 영광스러운 타이틀을 받을
                수 있었던 것 같습니다! 우수 개발자라고 해서 실력순으로 선발되는
                것은 아니니, 새로운 퍼비분들 마구 참여하면서 우수개발자 한 번
                도전해보세요! 이번 기수의 우수개발자는 ✨아주 멋진 이펍 각인이
                들어간 버티컬 마우스✨를 받았답니다…🥺 정말 잘 쓰고 있어요!
                실력을 키울 수 있는 이펍에서 많이 배워가시고 활동하시길
                바랄게요! (이로움, FrontEnd 인턴 개발자)
              </Text>
            </ContentBox>
          </ReviewContainer>
          <ReviewContainer>
            {isTablet ? (
              <>
                <Reviewer src={reviewer2} />
                <ContentBox>
                  <Text>
                    이화인 개발자들과 소통하고 교류할 수 있는 장을 만들어주신
                    이펍 1기 임원진 분들께 진심으로 감사드립니다. 우수 개발자로
                    선정되려고 열심히 활동한 것은 아니었지만, 그간의 노력에 대한
                    보상을 받은 것 같아 뿌듯합니다. 이펍 로고가 각인된 특별한
                    마우스도 잘 쓰겠습니다. (박현아, BackEnd 개발자)
                  </Text>
                </ContentBox>
              </>
            ) : (
              <>
                <ContentBox>
                  <Text>
                    이화인 개발자들과 소통하고 교류할 수 있는 장을 만들어주신
                    이펍 1기 임원진 분들께 진심으로 감사드립니다. 우수 개발자로
                    선정되려고 열심히 활동한 것은 아니었지만, 그간의 노력에 대한
                    보상을 받은 것 같아 뿌듯합니다. 이펍 로고가 각인된 특별한
                    마우스도 잘 쓰겠습니다. (박현아, BackEnd 개발자)
                  </Text>
                </ContentBox>
                <Reviewer src={reviewer2} />
              </>
            )}
          </ReviewContainer>
          <ReviewContainer>
            <Reviewer src={reviewer3} />
            <ContentBox>
              <Text>
                웹개발에 대해 하나도 모르는 초보 개발자였는데, EFUB에서 열리는
                다양한 세미나와 프로젝트 덕분에 많이 성장하게 된 것 같습니다.
                그리고 기초부터 심화까지 알려주는 커리큘럼과 리드/인턴에 맞는
                토이 프로젝트 배치 덕분에 프로젝트에 대한 부담 없이 재미있게
                개발할 수 있었습니다. 정말 EFUB은 올해 최고의 선택이었던 것
                같습니다☺ (강민지, 인턴 개발자)
              </Text>
            </ContentBox>
          </ReviewContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Review;

const DropdownContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.15);
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;
`;

const DropdownText = styled.div`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.green ? palette.green : 'white')};
`;

const DropdownImg = styled.img`
  position: absolute;
  right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0px;
`;

const Reviewer = styled.img`
  width: 300px;
  @media (max-width: 1023px) {
    width: 240px;
  }
  @media (max-width: 767px) {
    width: 180px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

const ContentBox = styled.div`
  width: 700px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
