import React, { useState } from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette"
import Button from "../components/common/Button";
import Input_box from "../components/common/Input";
import { RadioButton } from "../components/common/RadioButton";
import CheckBox from "../components/common/CheckBox";
import DesignerTool, { designerTool } from "../components/button/designerTool";

const Banner = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    width: 35rem;
    height: 120rem;
`
const Foot = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    justify-content: space-between;
`
const FootSub = styled.div`
    width: 47%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const TextBox = styled.div`
    width: 100%;
    height: 9rem;
    border-radius: 14px;
    background-color: rgba(225, 225, 225, 0.15);
    margin-bottom: 2.5rem;
`;
const Text1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.725rem; //28px
`
const Text2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.725rem; //28px
`
const Input = styled.input`
    font-size: 1rem;
    font-weight: 300;
    border: none;
    background: black;
    border-bottom: 2px solid ${palette.white};
    color: ${palette.white};
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    width: 100%; 
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
`
const Label1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 33.3%;
`
const LabelText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 1rem;
    line-height: 1.725rem; //28px
`
const DesignerRecruitSub= () => {
    //체크박스 여러개 
    const [checkedState, setCheckedState] = useState(
        new Array(6).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        console.log("I checked. \n");
    }
    // 8번 체크박스 
     const [checked, setChecked] = useState(false);
     const handleCheckboxChange = (e) => {
         setChecked(e.target.checked);
      };
    // 9번 체크박스 
    const [checked2, setChecked2] = useState(false);
     const handleCheckboxChange2 = (e) => {
         setChecked2(e.target.checked);
      };

    return <div>
      <Banner>
        <h1 style = {{height: '3.5rem', marginBottom: '0.01rem'}} >UI/UX DESIGNER</h1>
        <h6 style = {{marginTop: '0.001rem'}}>지원서 작성</h6>
     </Banner>
     <Main>
       <Text1>1. EFUB에 지원하게된 동기를 적어주세요 (300자 내외)</Text1>
       <Input_box
          placeholder="내용을 입력해주세요."
          name="motivation"
          width="35"
          inputwidth = "95"
          height="10"
          marginTop="13"
          validinput="true"
        />
       <Text1 style = {{marginTop: "3rem"}}
       >2. 웹디자인에 대한 자신감을 5점 만점으로 평가해주세요.</Text1>
            <Row style = {{width: "42%", marginLeft: "54%"}}>
                <Text1>1</Text1>
                <Text1>2</Text1>
                <Text1>3</Text1>
                <Text1>4</Text1>
                <Text1>5</Text1>
            </Row>
            <Row style = {{marginBottom: "3rem"}}>
                <Text1 style = {{marginTop: "1rem"}}>내 자신감은..</Text1>
                <RadioButton/>
            </Row>
       <Text1>3. 사용할 수 있는 디자인 툴을 모두 선택해주세요.</Text1>
       <Row>
           <Label1>
                <CheckBox className = {0} 
                    checked = {checkedState[0]} 
                    onChange = {(className)=>handleOnChange(className)}
                />
                <LabelText>피그마</LabelText>
            </Label1>
            <Label1>
                <CheckBox/>
                <LabelText>어도비XD</LabelText>
            </Label1>
            <Label1>
                <CheckBox/>
                <LabelText>일러스트</LabelText>
            </Label1>
       </Row>
       <Row style = {{marginTop: '1rem', marginBottom: '2rem'}}>
           <Label1>
                <CheckBox/>
                <LabelText>채플린</LabelText>
            </Label1>
            <Label1>
                <CheckBox/>
                <LabelText>포토샵</LabelText>
            </Label1>
            <Label1>
                <CheckBox/>
                <LabelText>기타(직접입력)</LabelText>
            </Label1>
       </Row>
       <Text1>3-1. 선택하신 툴에 대한 능숙도를 5점 만점으로 평가해주세요.</Text1>
           <Row style = {{width: "42%", marginLeft: "54%"}}>
                <Text1>1</Text1>
                <Text1>2</Text1>
                <Text1>3</Text1>
                <Text1>4</Text1>
                <Text1>5</Text1>
            </Row>
            <Row style = {{marginBottom: "3rem"}}>
                <Text1 style = {{marginTop: "1rem"}}>내 자신감은..</Text1>
                <RadioButton/>
            </Row>
       <Text1>4. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히 설명해주세요.(100자 내외)</Text1>
       <Input_box
          placeholder="내용을 입력해주세요."
          name="project"
          width="35"
          inputwidth = "95"
          height="10"
          marginTop="13"
          validinput="true"
        />
       <Text1 style = {{marginTop: "3rem"}}
       >5. 개발자와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.</Text1>
       <Input_box
          placeholder="내용을 입력해주세요."
          name="project_experience"
          width="35"
          inputwidth = "95"
          height="10"
          marginTop="13"
          validinput="true"
        />
       <Text1 style = {{marginTop: "3rem"}}
       >6. 디자이너와의 협업 경험이 있다면, 프로젝트 경험에 대해 서술해주세요.</Text1>
       <Input_box
          placeholder="내용을 입력해주세요."
          name="project_experience"
          width="35"
          inputwidth = "95"
          height="10"
          marginTop="13"
          validinput="true"
        />
       <Text1 style = {{marginTop: "3rem"}}
       >7. 포트플리오 링크를 제출해주세요.</Text1>
       <Input/>
       <Text1>8. 면접은 9월 9일(금) 저녁 7시부터 10시에 진행됩니다. 참여 가능하십니까?</Text1>
       <label style = {{marginBottom: "2rem", marginTop: "1rem"}}>
          <CheckBox checked = {checked} onChange = {handleCheckboxChange}/>
          <span>&ensp;&ensp;&ensp;&ensp;네 가능합니다.</span>
        </label>
       <Text1>9. 오티는 9월 11일 토요일 09시 30분에 진행됩니다.
              오티를 참석하지 않으실 경우, 합격은 취소됩니다. 확인하셨습니까?</Text1>
        <label style = {{marginBottom: "2rem", marginTop: "1rem"}}>
          <CheckBox checked = {checked2} onChange = {handleCheckboxChange2}/>
          <span>&ensp;&ensp;&ensp;&ensp;네 확인했습니다.</span>
        </label>
       <Foot>
        <Text2>2/2 페이지</Text2>  
          <FootSub>
            <Button blue>저장</Button>
            <Button filled>제출하기</Button>
          </FootSub>
       </Foot>
     </Main>
    </div>
  };
  
  export default DesignerRecruitSub;
  