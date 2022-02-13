import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import Button from '../common/Button';
import Arrow from '../../assets/recruitment/arrow.png';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    height: 42rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const BackgroundBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35rem;
  padding: 1rem 5rem 1rem 5rem;
  background-color: rgba(225, 225, 225, 0.15);
  border-radius: 10px;
  @media (max-width: 1023px) {
    width: 768px;
    height: 30rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  height: 20rem;
  justify-content: space-between;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`;

const ButtonItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 9rem;
  justify-content: space-between;
`;

const ListBox = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  text-align: end;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: ${(props) => props.size || '30px'};
  font-family: ${(props) => props.font || 'Montserrat'};
  margin-bottom: ${(props) => props.margin || '0px'};
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: ${(props) => props.small || '20px'};
  }
`;

const PcBanner = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>RECRUITMENT</Title>
      <BackgroundBox>
        <TextBox>
          <Text margin="30px">EFUB 2nd Recruiting</Text>
          <Text size="60px" small="40px">
            EWHA
          </Text>
          <Text size="60px" small="40px">
            FRONTEND
          </Text>
          <Text size="60px" small="40px">
            UXUI
          </Text>
          <Text size="60px" small="40px" margin="30px">
            BACKEND
          </Text>
          <Text size="20px" small="15px" font="Roboto" margin="15px">
            모집분야 | UXUI 디자인, 프론트/백엔드 개발
          </Text>
          <Text size="20px" small="15px" font="Roboto">
            모집기간 | 02/14 ~ 02/25 23:59까지
          </Text>
        </TextBox>
        <ButtonBox>
          {/* <ListBox onClick={() => navigate('/recruitment/pass')}> */}
          <ListBox
            onClick={() =>
              swal.fire({
                width: 400,
                background: palette.black,
                color: palette.white,
                text: '조회 기간이 아닙니다!',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
                backdrop: palette.backdrop,
              })
            }
          >
            <div>
              <Text size="30px" font="Roboto">
                합격자 조회
              </Text>
              <Text size="30px" font="Roboto">
                바로가기
              </Text>
            </div>
            <img src={Arrow} alt="arrow" />
          </ListBox>
          <ButtonItems>
            <Button
              width="15"
              height="4"
              filled
              onClick={() => navigate('/recruitment/developer')}
            >
              개발자로 지원하기
            </Button>
            <Button
              width="15"
              height="4"
              filled
              onClick={() => navigate('/recruitment/designer')}
            >
              디자이너로 지원하기
            </Button>
          </ButtonItems>
        </ButtonBox>
      </BackgroundBox>
    </Wrapper>
  );
};

export default PcBanner;
