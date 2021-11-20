import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';
import sidebar from '../../assets/sidebar.png';
import close from '../../assets/close-icon.png';

const menus = [
    { name: 'ABOUT', link: '/' },
    { name: 'PROJECT', link: '/project' },
    { name: 'RECRUITMENT', link: '/recruitment' },
    { name: 'CONTACT', link: '/contact' }
];

const Logo = styled.div`
    font-size: 1.625rem;
    color: ${palette.white};
`;

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: ${palette.black};
    z-index: 999;
`;

const Blur = styled.div`
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 0.2s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const SideBlock = styled.div`
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: black;
    padding: 4rem 2rem 2rem 2rem;
`

const SideMenu = styled.div`
    font-size: 1.25rem;
    cursor: pointer;
    text-decoration: none;
    color: ${palette.white};
    ${props => props.active && css`
        color: ${palette.green};
    `}
    margin-top: 2rem;
`;

const Wrapper = styled(Responsive)`
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const Spacer = styled.div`
    height: 6.5rem;
`;

const Button = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({ menu, onSelect }) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <HeaderBlock>
                        <Wrapper>
                            <Logo onClick={() => onSelect('ABOUT')}>
                                <Link to='/'>EFUB</Link>
                            </Logo>
                            <Button
                                onClick={onToggle}
                            >
                                <img
                                    src={sidebar}
                                    alt="sidebar"
                                />
                            </Button>
                        </Wrapper>
                    </HeaderBlock>
                    <Spacer />
                </>
            ) : (
                <>
                    <HeaderBlock>
                        <Wrapper>
                            <Logo onClick={() => onSelect('ABOUT')}>
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
            )
            }
            {
                sidebarOpen ? (
                    <>
                        <Blur onClick={onToggle} />
                        <SideBlock>
                            <Button
                                onClick={onToggle}
                                style={{
                                    position: "absolute",
                                    top: "2rem",
                                    right: "2rem",
                                }}
                            >
                                <img
                                    src={close}
                                    alt="close"
                                    onClick={onToggle}
                                    style={{
                                        height: "15px"
                                    }}
                                />
                            </Button>
                            {menus.map(m => (
                                <SideMenu
                                    key={m.name}
                                    active={m.name === menu}
                                    onClick={() => {
                                        onSelect(m.name);
                                        onToggle();
                                    }}
                                >
                                    <Link to={`${m.link}`}>{m.name}</Link>
                                </SideMenu>
                            ))}
                        </SideBlock>
                    </>
                ) : (
                    null
                )
            }
        </>
    );
};

export default Header;
