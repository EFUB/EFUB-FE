import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ModalFrame from '../common/ModalFrame';
import ModalFrameMobile from '../common/ModalFrameMobile';
import Team from './Team';
import Button from '../common/Button';
import projects from '../../assets/project/info/projects';

const Modal = styled(ModalFrame)`
  width: 85%;
`;

const ModalMobile = styled(ModalFrameMobile)`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-top: 4rem;
  }
`;

const TeamBlock = styled.div`
  align-items: flex-start;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3rem 0rem 2rem 0rem;
`;

const About = styled.div`
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
  width: 30rem;
  line-height: 2.75rem;
  @media (max-width: 1023px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
    width: 100%;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 1rem;
  border-radius: 10px;
`;

const ProjectModal = ({ position, card, _handleModal }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      {isMobile ? (
        <ModalMobile top={position} _handleModal={_handleModal}>
          <Title>{projects[card].name}</Title>
          <About>{projects[card].about}</About>
          <InfoBlock>
            <TeamBlock>
              {projects[card].team.map((t) => (
                <Team team={t} />
              ))}
            </TeamBlock>
          </InfoBlock>
          <ButtonBlock>
            <Button
              round
              width="6"
              href={projects[card].links['website']}
              style={{
                fontSize: '0.8rem',
                marginRight: 10,
                height: '2.5rem',
                padding: '0.5rem',
              }}
            >
              WebSite
            </Button>
            <Button
              round
              width="6"
              href={projects[card].links['github']}
              style={{
                fontSize: '0.8rem',
                height: '2.5rem',
                padding: '0.5rem',
              }}
            >
              GitHub
            </Button>
          </ButtonBlock>
          {projects[card].photos.map((p) => (
            <Image src={p} alt="photo" />
          ))}
        </ModalMobile>
      ) : (
        <Modal _handleModal={_handleModal}>
          <Title>{projects[card].name}</Title>
          <InfoBlock>
            <TeamBlock>
              {projects[card].team.map((t) => (
                <Team team={t} />
              ))}
            </TeamBlock>
            <About>{projects[card].about}</About>
          </InfoBlock>
          <ButtonBlock>
            <Button
              round
              width="8"
              style={{ marginRight: 20 }}
              onClick={() =>
                window.open(projects[card].links['website'], '_blank')
              }
            >
              WebSite
            </Button>
            <Button
              round
              width="8"
              onClick={() =>
                window.open(projects[card].links['github'], '_blank')
              }
            >
              GitHub
            </Button>
          </ButtonBlock>
          {projects[card].photos.map((p) => (
            <Image src={p} alt="photo" />
          ))}
        </Modal>
      )}
    </>
  );
};

export default ProjectModal;
