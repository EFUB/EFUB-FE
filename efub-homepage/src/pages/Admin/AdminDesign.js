import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
`;

const ListBox = styled.div`
    background-color: gray;
    margin: 5rem;
    padding: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const List = styled.div`
    width: 50rem;
    height: 20rem;
    background-color: black;
    margin-bottom: 2rem;
`;

const AdminDesign = () => {
    return (
        <Wrapper>
            <h1>디자이너 지원 서류</h1>
            <ListBox>
                <List />
                <List />
                <List />
                <List />
            </ListBox>
            <Button onClick={() => alert('변경사항이 저장되었습니다.')}style={{position: "fixed", right: "3rem", top: "3rem"}}>저장</Button>
        </Wrapper>
    );
};

export default AdminDesign;
