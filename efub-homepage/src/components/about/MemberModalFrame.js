import React from 'react';
import styled from 'styled-components';
import close from '../../assets/close-icon.png';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        // phone
        animation: modal-show 1s;
        @keyframes modal-show {
            from {
                opacity: 0;
                margin-top: -50px;
            }
            to {
                opacity: 1;
                margin-top: 0;
            }
        }
       }
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 1s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (max-width: 767px) {
        // phone
       }
`;

const ModalBlock = styled.div`
    position: absolute;
    margin-top: 140rem;
    top: 20rem;
    border-radius: 10px;
    padding: 4rem;
    background-color: black;
    width: 60rem;
    @media (max-width: 1023px) {
        width: 50rem;
    }
    min-height: 35rem;
    animation: modal-show 1s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @media (max-width: 767px) {
        // phone
        padding: 2rem;
        width: 90%;
        background-color: black;
        margin-top: 10rem;
       }
`;

const Close = styled.img.attrs({
    src: close,
})`
    position: absolute;
    right: 4rem;
    top: 4rem;
    cursor: pointer;
    @media (max-width: 767px) {
        // phone
        right: 2rem;
        top: 2rem;
        width: 1.5rem;
       }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        // phone
       }
`;

const ModalFrame = ({ _handleModal, children, ...rest}) => {
    // _handleModal로 modal open/close 되는 토글 함수 넣어 주면 됨
    /* style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록 */
    /* ...rest를 사용하여 ModalFrame에게 전달 */

    var top = window.pageYOffset;
    return (
        <Container>
            <Background onClick={_handleModal} />
            <ModalBlock {...rest} margintop={top}>
                <Close onClick={_handleModal} />
                <Contents>
                    {children}
                </Contents>
            </ModalBlock>
        </Container>
    );
};

export default ModalFrame;