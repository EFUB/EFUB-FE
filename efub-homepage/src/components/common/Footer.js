import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';
import mail from '../../assets/footer/mail-icon.png';
import instagram from '../../assets/footer/instagram-icon.png';
import facebook from '../../assets/footer/facebook-icon.png';

const FooterBlock = styled.div`
  z-index: 100;
  width: 100%;
  background: ${palette.black};
`;

/* Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
const Wrapper = styled(Responsive)`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Copyright = styled.div`
  font-size: 0.938rem;
  font-family: 'Roboto', sans-serif;
  color: ${palette.gray};
  @media (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

const IconsBlock = styled.nav`
  display: flex;
`;

const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <Copyright>© Copyright EFUB All Rights Reserved</Copyright>
        <IconsBlock>
          <a href="mailto:ewhaefub@gmail.com">
            <Icon src={mail} alt="mail" />
          </a>
          <a href="https://www.instagram.com/ewha_efub/?hl=ko">
            <Icon src={instagram} alt="mail" />
          </a>
          <a href="https://www.facebook.com/ewhaefub/">
            <Icon src={facebook} alt="mail" />
          </a>
        </IconsBlock>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
