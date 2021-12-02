import React, { useState , useEffect, useContext} from 'react'

import { useLocation } from "react-router";

import styled from 'styled-components'
import Button from '../../components/common/Button'
import InputBox from '../../components/common/InputBox'
import InputLine from '../../components/common/InputLine'
import { Link } from 'react-router-dom'
import DeveloperStack from '../../components/recruitment/DeveloperStack'
import DeveloperPart from '../../components/recruitment/DeveloperPart'
import Confident from '../../components/common/Confident'
import axios from 'axios'

import AppContext from "../../components/common/AppContext";
import App from '../../App'

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

const DeveloperApplyFormPage = () => {
  const location = useLocation();
  const userId = location.state;

  const [inputs, setInputs] = useState({
    first: '',
    second: '',
    lang: '',
  });

  const { first, second, lang } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [stackList, setStackList] = useState([
    { id: 0, label: "C", checked: false },
    { id: 1, label: "Python", checked: false },
    { id: 2, label: "Java", checked: false },
    { id: 3, label: "HTML", checked: false },
    { id: 4, label: "CSS", checked: false },
    { id: 5, label: "JavaScript", checked: false },
    { id: 6, label: "React", checked: false },
    { id: 7, label: "Vue", checked: false },
    { id: 8, label: "Node", checked: false },
    { id: 9, label: "Spring", checked: false },
    { id: 10, label: "Django", checked: false },
    { id: 11, label: "Flask", checked: false },
    { id: 12, label: "기타 (직접 입력)", checked: false },
  ]);
  const [part, setPart] = useState(1);
  const [score, setScore] = useState(1);

  const onToggle = (id) => {
    setStackList(
      stackList.map(stack =>
        stack.id === id ? { ...stack, checked: !stack.checked } : stack
      )
    );
  };

  const onClickPart = (id) => {
    setPart(id);
  };

  const onClickScore = (id) => {
    setScore(id);
  };

  // 기존 정보 불러오기  
  useEffect(()=> {
    console.log("hi");
    console.log(userId);
    axios
    .post('http://3.34.222.176:8080/api/recruitment/apply/get/dev',{user_id: userId})
    .then((response) => {
      console.log(response);
      //text box 값 할당하기 
      if(response.data.motive !== null) setInputs(inputs.first = response.data.motive);
      if(response.data.project_topic !== null) setInputs(inputs.second = response.data.project_topic);
      if(response.data.language !== null) setInputs(inputs.lang = response.data.language);
      //지원분야
      if(response.data.application_field !== null)setPart(part = response.data.application_field);
      //자신감 
      if(response.data.confidence_lang !== 0)setScore(score = response.data.confidence_lang);
      //사용 가능 기술
      // setStackList(
      //   stackList.map(stack =>
      //     stack.id === response.data.tool.tool_id ? { ...stack, checked: !stack.checked } : stack
      //   )
      // );
      
    });   
  }, []);   
  
  const myContext = useContext(AppContext);
  return (
    <>
    
      <BannerBlock>
        <Title>DEVELOPER</Title>
        <Subtitle>지원서 작성</Subtitle>
      </BannerBlock>
      <Main>
        <Question>1. EFUB에 지원하게 된 동기를 적어주세요. (300자 내외)</Question>
        <InputBox name="first" value={first} onChange={onChange} />
        <Question>2. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히 설명해주세요. (100자 내외)</Question>
        <InputBox name="second" value={second} onChange={onChange} />
        <Question>3. 지원 분야를 선택해주세요.</Question>
        <DeveloperPart part={part} onClickPart={onClickPart} />
        <Text style={{ marginBottom: 25 }}>3번 문항의 답변에 따라 인턴 지원서 혹은 리드 지원서 페이지로 넘어가게 되니 신중히 체크해 주세요!</Text>
        <Question>4. 자신 있는 프로그래밍 언어를 적어주세요.</Question>
        <InputLine name="lang" value={lang} placeholder="ex. 파이썬" onChange={onChange} />
        <Question>4-1. 위에서 답한 언어에 대한 자신감을 5점 만점으로 평가해주세요.</Question>
        <Wrapper>
          <Question style={{ marginTop: '0' }}>내 자신감은...</Question>
          <Confident score={score} onClickScore={onClickScore} />
        </Wrapper>
        <Question>5. 사용할 수 있는 기술을 모두 선택해주세요.</Question>
        <DeveloperStack stackList={stackList} onToggle={onToggle} />
        <Bottom>
          <Text>2/3 페이지</Text>
          <div>
            <Button blue style={{ marginRight: 15 }}
              onClick={() => { 
                console.log(userId);
              }}
            >저장</Button>
            {/* <Button filled onClick={() => { alert(`1번 : ${first} / 2번: ${second} / 3번 : ${part} / 4번 : ${lang} / 4-1번 : ${score}`) }}>다음</Button> */}
            {
              (part % 2) === 1 ? (
                <Link to="/developer-apply/intern">
                  <Button filled>
                    다음
                  </Button>
                </Link>
              ) : (
                <Link to="/developer-apply/lead">
                  <Button filled>
                    다음
                  </Button>
                </Link>
              )
            }
          </div>
        </Bottom>
      </Main>
      
    </>
  )
}

export default DeveloperApplyFormPage;
