import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';

const menus = [
    { name: 'About', link: '/' },
    { name: 'Project', link: '/project' },
    { name: 'Recruitment', link: '/recruitment' },
    { name: 'Contact', link: '/contact' }
];

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: ${palette.black};
    z-index: 99;
`;

/* Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
const Wrapper = styled(Responsive)`
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 1.625rem;
    color: ${palette.white};
`;

const MenusBlock = styled.div`
    display: flex;
`;

const Menu = styled.div`
    font-size: 1.25rem;
    cursor: pointer;
    text-decoration: none;
    color: ${palette.white};

    ${props => props.active && css`
        color: ${palette.green};
    `}

    & + & {
        margin-left: 2.625rem;
    }
`;

/* Header가 fixed으로 되어 있기 때문에 페이지의 콘텐츠가 6.5rem 아래에 나타나도록 해 주는 컴포넌트 */
const Spacer = styled.div`
    height: 6.5rem;
`;

const Header = ({ menu, onSelect }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Logo onClick={() => onSelect('About')}>
                        <Link to='/'>EFUB</Link>
                    </Logo>
                    <MenusBlock>
                        {menus.map(m => (
                            <Menu
                                key={m.name}
                                active={m.name === menu}
                                onClick={() => onSelect(m.name)}
                            >
                                <Link to={`${m.link}`}>{m.name}</Link>
                            </Menu>
                        ))}
                    </MenusBlock>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
