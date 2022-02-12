import React from 'react';
import ButtonBanner from '../components/about/ButtonBanner';
import logoBanner from '../assets/about/logoBanner.gif';
import Review from '../components/about/Review';
import Organizer from '../components/about/Organizer';

const AboutPageRenewal = () => {
  return (
    <>
      <img src={logoBanner} alt="logoBanner" style={{ width: '100%' }} />
      <ButtonBanner />
      <Review />
      <Organizer />
    </>
  );
};

export default AboutPageRenewal;
