import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 780px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

const Line = styled.div`
    margin-bottom: ${(props) => props.margin};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.div`
    font-family: "Roboto";
    font-size: 30px;
    font-weight: bold;
    margin-top: 8rem;
    margin-bottom: 5rem;
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
    font-size: 20px;
    line-height: 40px;
`;

const Textbox = styled.div`
    width: ${(props) => props.width};
    margin-bottom: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Message = styled.div`
    font-family: "Roboto";
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 8rem;
`;

const Detail = () => {
    return (
        <Wrapper>
            <Title>이화여대 교내 유일 웹 개발 커리어 클럽 EFUB 모집</Title>
            <Text margin="2rem">이화 웹 개발 커리어 클럽에서 웹 개발자 및 웹 디자이너 여러분을 모집합니다.</Text>
            <Text margin="8rem">리드 개발자는 곧장 프로젝트 착수와 세미나 주최가 가능한 인원이며, 인턴 개발자는 양쪽 분야의 리드를 보고 학습을 진행해 자신이 어느 쪽의 직무가 적성에 맞는지 탐색할 수 있습니다.
                디자이너 포지션의 경우, 리드 포지션만을 선발하여 곧장 프로젝트에 착수 가능한 인원을 선발합니다.</Text>
            <Line>
                <Textbox margin="8rem">
                    <Label margin="1rem">활동 안내</Label>
                    <Text>학기 중 세미나 및 스터디</Text>
                    <Text>학기 중 세미나 및 스터디</Text>
                    <Text>디자인 | 매주 목요일 20시 ~ 21시 30분</Text>
                    <Text>프론트엔드 | 매주 목요일 19시 30분</Text>
                    <Text>백엔드 | 매주 토요일 09시 30분</Text>
                </Textbox>
                <Textbox margin="8rem">
                    <Label margin="1rem">활동 혜택</Label>
                    <Text>인재개발원 공식 수료증</Text>
                    <Text>디자이너, 개발자와의 협업 경험</Text>
                    <Text>우수 활동자 선정 시 상품 제공</Text>
                    <Text>연사 초청 세미나 참여 기회</Text>
                    <Text>레디미에서 지원하는 커리어 코칭</Text>
                </Textbox>
            </Line>
            <Line margin="3rem">
                <Label margin="1rem">개발자 지원 자격</Label>
                <Textbox width="30rem">
                    <Text>2학기 이상 이수자</Text>
                    <Text>학번, 나이, 전공 불문 웹개발에 열정이 있는</Text>
                    <Text style={{ fontWeight: "bold" }}>최소 한 가지의 프로그래밍 언어를 다룰 수 있는 이화인</Text>
                </Textbox>
            </Line>
            <Line margin="3rem">
                <Label margin="1rem">디자이너 지원 자격</Label>
                <Textbox width="30rem">
                    <Text>3학기 이상 이수자</Text>
                    <Text>학번, 나이, 전공 불문 웹디자인에 열정이 있는</Text>
                    <Text style={{ fontWeight: "bold" }}>포트폴리오 제출이 가능한 이화인</Text>
                </Textbox>
            </Line>
            <Line margin="3rem">
                <Label margin="1rem">지원 방법</Label>
                <Textbox width="30rem">
                    <Text>상단 지원하기 버튼 클릭 후, 지원서 작성</Text>
                </Textbox>
            </Line>
            <Line margin="3rem">
                <Label margin="1rem">우대 사항</Label>
                <Textbox width="30rem">
                    <Text>프로젝트 경험이 있거나 기본적인 리액트 지식이 있는 개발자</Text>
                    <Text>웹서비스 기획에 관심이 있는 디자이너</Text>
                    <Text>2학기 이상 활동 가능자</Text>
                </Textbox>
            </Line>
            <Line margin="3rem">
                <Label margin="1rem">모집 일정</Label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Textbox width="15rem">
                        <Text>2월 14일 ~ 2월 25일</Text>
                        <Text>2월 28일</Text>
                        <Text>3월 1일 ~ 3월 6일</Text>
                        <Text>3월 7일</Text>
                        <Text>3월 8일</Text>
                    </Textbox>
                    <Textbox width="15rem">
                        <Text>서류 모집</Text>
                        <Text>서류 합격 발표 및 면접 안내</Text>
                        <Text>면접</Text>
                        <Text>최종 합격자 발표</Text>
                        <Text>OT (필참)</Text>
                    </Textbox>
                </div>

            </Line>
            <Line margin="12rem">
                <Label margin="1rem">문의</Label>
                <Textbox width="30rem">
                    <Text>웹페이지 상단 CONTACT에서 문의</Text>
                </Textbox>
            </Line>
            <Message>미래의 퍼비를 응원합니다.</Message>
        </Wrapper>
    );
};

export default Detail;