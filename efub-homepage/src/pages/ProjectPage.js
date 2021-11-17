import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Banner from '../components/project/Banner';
import ButtonList from '../components/project/ButtonList';
import CardList from '../components/project/CardList';
import ProjectModal from '../components/project/ProjectModal';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProjectPage = () => {
    const [select, setSelect] = useState('all');
    const onSelect = useCallback(select => setSelect(select), []);
    // const [openModalId, setOpenModalId] = useState(0);

    const [openModal, setOpenModal] = useState(false);
    const _handleModal = () => setOpenModal(!openModal);

    const [card, setCard] = useState(null);

    const _handleClick = (id) => { setCard(id); _handleModal(); };


    return (
        <>
            <Banner />
            <Main>
                <ButtonList select={select} onSelect={onSelect} />
                <CardList select={select} _handleClick={_handleClick} />
            </Main>
            {openModal && (
                <ProjectModal card={card} _handleModal={_handleModal} />
            )}
        </>
    );
};

export default ProjectPage;