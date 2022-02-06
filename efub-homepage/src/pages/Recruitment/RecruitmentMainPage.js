import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import PcBanner from '../../components/recruitment/PcBanner';
import PcDetail from '../../components/recruitment/PcDetail';
import MobileBanner from '../../components/recruitment/MobileBanner';
import MobileDetail from '../../components/recruitment/MobileDetail';
import Left from '../../assets/recruitment/Left.png';
import Right from '../../assets/recruitment/Right.png';

const BackgroundImg = styled.img`
  width: 20rem;
  top: 60rem;
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  z-index: 1;
  position: absolute;
  @media (max-width: 1023px) {
    width: 0px;
  } ;
`;

const RecruitmentMainPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      {isMobile ? (
        <>
          <MobileBanner />
          <MobileDetail />
        </>
      ) : (
        <>
          <PcBanner />
          <PcDetail />
          <BackgroundImg src={Left} alt="leftImg" left="0" />
          <BackgroundImg src={Right} alt="rightImg" right="0" />
        </>
      )}
    </>
  );
};

export default RecruitmentMainPage;
