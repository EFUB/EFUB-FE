import React, { useState, useContext} from 'react'
import styled from 'styled-components'
import Button from '../../components/common/Button'
import InputBox from '../../components/common/InputBox'
import InputLine from '../../components/common/InputLine'
import { Link } from 'react-router-dom'
import DeveloperStack from '../../components/recruitment/DeveloperStack'
import Confident from '../../components/common/Confident'
import Checkbox from '../../components/common/CheckBox'

import SaveUserID from "../../components/common/SaveUserID";
import {savedInfoDes } from '../../_actions/user_actions' ;

const BannerBlock = styled.div`
    width: 100%;
    position: relative;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const Subtitle = styled.div`
    font-size: 1.25rem;
    font-family: Roboto;
`;

const Main = styled.div`
    width: 78%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 5rem;
    justify-content: space-between;
`

const Question = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
`
const Text = styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-size: 1rem;
`

const DesignerApplyFormPage = (props) => {
    const {user_id} = props;
    const [inputs, setInputs] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        portfolio: ''
    });
    const { first, second, third, fourth, portfolio } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [stackList, setStackList] = useState([
        { id: 0, label: "피그마", checked: false },
        { id: 1, label: "어도비 XD", checked: false },
        { id: 2, label: "일러스트레이터", checked: false },
        { id: 3, label: "제플린", checked: false },
        { id: 4, label: "포토샵", checked: false },
        { id: 5, label: "기타 (직접입력)", checked: false },
    ]);
    const [score, setScore] = useState(1);
    const [skill, setSkill] = useState(1);
    const [available, setAvailable] = useState(false);
    const [check, setCheck] = useState(false);
    

    const onToggle = (id) => {
        setStackList(
            stackList.map(stack =>
                stack.id === id ? { ...stack, checked: !stack.checked } : stack
            )
        );
    };

    const onClickScore = (id) => {
        setScore(id);
    };

    const onClickSkill = (id) => {
        setSkill(id);
    };

    const onToggleAvailable = () => {
        setAvailable(!available);
    };

    const onToggleCheck = () => {
        setCheck(!check);
    };

    fetch(savedInfoDes(user_id))
    .then(response => {
        const data = response.payload
        console.log(data)
    })

    return (
        <>
            <BannerBlock>
                <Title>UI/UX DESIGNER</Title>
                <Subtitle>지원서 작성</Subtitle>
            </BannerBlock>
            <Main>
                <Question>1. EFUB에 지원하게 된 동기를 적어주세요. (300자 내외)</Question>
                <InputBox name="first" value={first} onChange={onChange} />
                <Question>2. 웹디자인에 대한 자신감을 5점 만점으로 평가해주세요.</Question>
                <Wrapper>
                    <Question style={{ marginTop: '0' }}>내 자신감은...</Question>
                    <Confident score={score} onClickScore={onClickScore} />
                </Wrapper>
                <Question>3. 사용할 수 있는 디자인 툴을 모두 선택해주세요.</Question>
                <DeveloperStack stackList={stackList} onToggle={onToggle} />
                <Question style={{ marginTop: '10rem' }}>3-1. 선택하신 툴에 대한 능숙도를 5점 만점으로 평가해주세요.</Question>
                <Wrapper>
                    <Question style={{ marginTop: '0' }}>내 자신감은...</Question>
                    <Confident score={skill} onClickScore={onClickSkill} />
                </Wrapper>
                <Question>4. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히 설명해주세요. (100자 내외)</Question>
                <InputBox name="second" value={second} onChange={onChange} />
                <Question>5. 개발자와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.</Question>
                <InputBox name="third" value={third} onChange={onChange} />
                <Question>6. 디자이너와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.</Question>
                <InputBox name="fourth" value={fourth} onChange={onChange} />
                <Question>7. 포트플리오 링크를 제출해주세요.</Question>
                <InputLine name="portfolio" value={portfolio} onChange={onChange} />
                <Question>8. 면접은 9월 9일(금) 저녁 7시부터 10시에 진행됩니다. 참여 가능하십니까?</Question>
                <Checkbox onToggle={() => { onToggleAvailable() }} label="네, 가능합니다." checked={available} />
                <Question style={{ marginBottom: '5px' }}>9. 오티는 9월 11일 토요일 09시 30분에 진행됩니다.</Question>
                <Question style={{ marginTop: '0' }}>오티에 참석하지 않으실 경우, 합격은 취소됩니다. 확인하셨습니까?</Question>
                <Checkbox onToggle={() => { onToggleCheck() }} label="네, 확인했습니다." checked={check} />
                <Bottom>
                    <Text>2/2 페이지</Text>
                    <Button filled onClick={() => { alert(`1번 : ${first} / 2번: ${second} / 3번 : ${third} / 4번 : ${fourth} / 포폴 : ${portfolio}`) }}>다음</Button>

                    <div>
                        <Button blue style={{ marginRight: 15 }}>저장</Button>
                        <Link to="/thankyou">
                            <Button width="8" filled>
                                제출하기
                            </Button>
                        </Link>
                    </div>
                </Bottom>
            </Main>
        </>
    )
}

export default DesignerApplyFormPage;
