import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import palette from '../lib/styles/palette'
import Button from '../components/common/Button'
import Input_box from '../components/common/Input'
import { RadioButton } from '../components/common/RadioButton'
import Checkbox from '../components/common/CheckBox'

const Banner = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: center;
  width: 35rem;
  height: 50rem;
`
const Foot = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5rem;
  justify-content: space-between;
`
const FootSub = styled.div`
  width: 49%;
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
`
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
  //line-height: 1.725rem; //28px
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
  margin-bottom: 2.5rem;
  width: 100%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`
const Label1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`
const Labelsub = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: ;
  justify-content: flex-start;
`
const LabelText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 1.3rem;
  line-height: 1.2rem;
`
const DeveloperRecruitIntern = () => {
  const [checked, setChecked] = useState(false)
  const handleCheckboxChange = e => {
    setChecked(e.target.checked)
  }
  return (
    <div>
      <Banner>
        <h1 style={{ height: '3.5rem', marginBottom: '0.01rem' }}>
          INTERN DEVELOPER
        </h1>
        <h6 style={{ marginTop: '0.001rem' }}>지원서 작성</h6>
      </Banner>
      <Main>
        <Text1>1. 지금까지의 프로젝트 경험를 서술해주세요. (500자 내외)</Text1>
        <Input_box
          placeholder="내용을 입력해주세요."
          name="project_experience"
          width="35"
          inputwidth="95"
          height="10"
          marginTop="13"
          validinput="true"
        />
        <Text1 style={{ marginTop: '3rem' }}>
          2. 깃허브 또는 기술블로그 링크를 적어주세요.
        </Text1>
        <Input />
        <Text1>
          3. 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을
          확인하셨습니까?
        </Text1>
        <label style={{ marginBottom: '2rem', marginTop: '1rem' }}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
          <span>&ensp;&ensp;&ensp;&ensp;네 확인했습니다.</span>
        </label>
        <Text1 style={{ marginBottom: '0rem' }}>
          4. 다음중 면접이 '불가능한' 시간을 선택해주세요.{' '}
        </Text1>
        <Text2>
          불가능한 시간을 모두 선택해주시고, 모두 가능하다면 '모두 가능합니다'를
          선택해주세요.{' '}
        </Text2>
        <Row style={{ marginTop: '1.5rem' }}>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 13일 토요일 오전</LabelText>
              <LabelText>(9AM-12PM)</LabelText>
            </Labelsub>
          </Label1>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 14일 토요일 오전</LabelText>
              <LabelText>(9AM-12PM)</LabelText>
            </Labelsub>
          </Label1>
        </Row>
        <Row>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 13일 토요일 오후</LabelText>
              <LabelText>(1PM-6PM)</LabelText>
            </Labelsub>
          </Label1>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 14일 일요일 오후</LabelText>
              <LabelText>(1PM-6M)</LabelText>
            </Labelsub>
          </Label1>
        </Row>
        <Row>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 13일 토요일 저녁</LabelText>
              <LabelText>(7PM-10PM)</LabelText>
            </Labelsub>
          </Label1>
          <Label1>
            <Checkbox />
            <Labelsub>
              <LabelText>3월 14일 일요일 저녁</LabelText>
              <LabelText>(7PM-10PM)</LabelText>
            </Labelsub>
          </Label1>
        </Row>
        <Row>
          <Label1>
            <Checkbox />
            <LabelText>모두 가능합니다!</LabelText>
          </Label1>
        </Row>
        <Foot>
          <Text2>3/3 페이지</Text2>
          <FootSub>
            <Button blue>저장</Button>
            <Link to="/thankyou">
              <Button filled>제출하기</Button>
            </Link>
          </FootSub>
        </Foot>
      </Main>
    </div>
  )
}

export default DeveloperRecruitIntern
