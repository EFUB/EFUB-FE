import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Banner from '../../components/recruitment/Banner';
import MobileBanner from '../../components/recruitment/MobileBanner';
import MobileDetail from '../../components/recruitment/MobileDetail';
import Left from '../../assets/recruitment/Left.png';
import Right from '../../assets/recruitment/Right.png';
import Detail from '../../components/recruitment/Detail';

const BackgroundImg = styled.img`
  width: 20rem;
  top: 60rem;
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  z-index: 1;
  position: absolute;
  @media (max-width: 1023px) {
    width: 0px;
  };
`;

const RecruitmentPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
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
          <Banner />
          <BackgroundImg src={Left} alt="leftImg" left="0" />
          <BackgroundImg src={Right} alt="rightImg" right="0" />
          <Detail />
        </>
      )
      }
    </>
  );
};

export default RecruitmentPage;
