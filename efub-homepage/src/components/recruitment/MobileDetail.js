import React, { useState } from "react";
import styled from 'styled-components';
import Dropdown from "./Dropdown";

const Wrapper = styled.div`
    width: 100%;
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Textbox = styled.div`
  width: 100%;
    margin-bottom: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
`;

const Title = styled.div`
    font-family: "Roboto";
    font-size: 22px;
    font-weight: bold;
    line-height: 35px;
    margin-bottom: ${(props) => props.margin};
`;

const Label = styled.div`
    margin-bottom: ${(props) => props.margin};
    font-family: "Roboto";
    font-weight: bold;
    font-size: 24px;
`;

const Text = styled.div`
    width: 100%;
    margin-bottom: ${(props) => props.margin};
    font-family: "Roboto";
    font-size: 15px;
    line-height: 25px;
`;

const Message = styled.div`
    font-family: "Roboto";
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 8rem;
`;

const MobileDetail = () => {
  const [detail, setDetail] = useState([false, false, false, false, false, false, false])
  const _handleClick = (idx) => {
    let newDetail = [...detail];
    newDetail[idx] = !detail[idx];
    setDetail(newDetail);
    console.log(detail)
  }
  return (
    <Wrapper>
      <Textbox>
        <Title>이화여대 교내 유일 웹 개발</Title>
        <Title margin="20px"> 커리어 클럽 EFUB 모집</Title>
        <Text>이화 웹 개발 커리어 클럽에서 디자이너 및 개발자 여러분을 모집합니다.</Text>
      </Textbox>
      <Dropdown onClick={() => _handleClick(0)} title="모집 분야" open={detail[0]} />
      {
        detail[0] ? (
          <Textbox>
            <Text>웹 개발 분야는 크게 프론트엔드와 백엔드, 그리고 디자인으로 나뉩니다. </Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(1)} title="모집 조건" open={detail[1]} />
      {
        detail[1] ? (
          <Textbox>
            <Text style={{ fontWeight: "bold" }}>개발자</Text>
            <Text>2학기 이상 이수한 </Text>
            <Text>BackEnd: 화요일 19:00~22:00</Text>
            <Text margin="10px">UXUI: 목요일 20:00~21:30</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(2)} title="우대 사항" open={detail[2]} />
      {
        detail[2] ? (
          <Textbox>
            <Text>프로젝트 경험이 있는 개발자</Text>
            <Text>웹서비스 기획에 관심이 있는 디자이너</Text>
            <Text>2학기 이상 활동 가능자</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(3)} title="모집 일정" open={detail[3]} />
      {
        detail[3] ? (
          <Textbox>
            <Text>2.14 - 2.25 지원서 접수</Text>
            <Text>2.28 면접자 공지</Text>
            <Text>3.03 - 3.06 면접</Text>
            <Text>3.07 최종 합격자 발표</Text>
            <Text>3.08 OT (필참)</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(4)} title="지원 방법" open={detail[4]} />
      {
        detail[4] ? (
          <Textbox>
            <Text>웹사이트 접속 > RECRUITMENT > 상단 지원하기 버튼 </Text>
            <Text>* 지원서 작성은 PC로 부탁드립니다.</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(5)} title="활동 안내" open={detail[5]} />
      {
        detail[5] ? (
          <Textbox>
            <Text style={{ fontWeight: "bold" }}>학기 중 - 세미나 및 여름 프로젝트 기획</Text>
            <Text>FrontEnd: 월요일 19:00~22:00</Text>
            <Text>BackEnd: 화요일 19:00~22:00</Text>
            <Text margin="10px">UXUI: 목요일 20:00~21:30</Text>
            <Text style={{ fontWeight: "bold" }}>방학 - 여름 프로젝트 진행</Text>
            <Text>자율적으로 활동시간을 정함</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
      <Dropdown onClick={() => _handleClick(6)} title="활동 혜택" open={detail[6]} />
      {
        detail[6] ? (
          <Textbox>
            <Text>인재개발원 공식 수료증</Text>
            <Text>개발자, 디자이너 간 협업 경험</Text>
            <Text>우수 활동자 선정 시 상품 증정</Text>
            <Text>연사 초청 세미나 참여 기회</Text>
            <Text>외부 협력업체에서 지원하는 커리어 코칭</Text>
          </Textbox>
        ) : (
          <></>
        )
      }
    </Wrapper>
  );
};

export default MobileDetail;