import React from 'react';
import styled from 'styled-components';
import ModalFrame from '../common/ModalFrame';
import Team from './Team';
import Button from '../common/Button';
import projects from '../../assets/project/info/projects';

const Modal = styled(ModalFrame)`
    width: 85%;
`;

const Title = styled.div`
    width: 100%;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
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
`;

const Image = styled.img`
    width: 100%;
    margin-top: 1rem;
`;

const ProjectModal = ({ card, _handleModal }) => {
    return (
        <Modal _handleModal={_handleModal}>
            <Title>{projects[card].name}</Title>
            <InfoBlock>
                <TeamBlock>
                    {projects[card].team.map(t =>
                        <Team team={t} />
                    )}
                </TeamBlock>
                <About>{projects[card].about}</About>
            </InfoBlock>
            <ButtonBlock>
                <Button
                    round
                    href={projects[card].links["website"]}
                    style={{ marginRight: 20 }}
                >WebSite</Button>
                <Button
                    round
                    href={projects[card].links["github"]}
                >GitHub</Button>
            </ButtonBlock>
            {projects[card].photos.map(p =>
                <Image src={p} alt="photo" />
            )}
        </Modal>
    );
};

export default ProjectModal;