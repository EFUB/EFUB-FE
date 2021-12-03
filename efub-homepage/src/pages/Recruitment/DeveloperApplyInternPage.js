import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import InputBox from "../../components/common/InputBox";
import InputLine from "../../components/common/InputLine";
import { Link } from "react-router-dom";
import Checkbox from "../../components/common/CheckBox";
import MeetingTime from "../../components/recruitment/MeetingTime";
import { USER_SERVER } from "../../config";

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
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  justify-content: space-between;
`;

const Question = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 6rem;
`;
const Text = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
`;

const DeveloperApplyInternPage = ({ location }) => {
  const posts = location.state.posts;

  const [inputs, setInputs] = useState({
    first: "",
    second: "",
  });

  const { first, second } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [timeList, setTimeList] = useState([
    { id: 0, label: "3월 13일 토요일 오전 (9AM~12PM)", checked: false },
    { id: 1, label: "3월 14일 일요일 오전 (9AM~12PM)", checked: false },
    { id: 2, label: "3월 13일 토요일 오후 (1PM~6PM)", checked: false },
    { id: 3, label: "3월 14일 일요일 오후 (1PM~6PM)", checked: false },
    { id: 4, label: "3월 13일 토요일 저녁 (7PM~10PM)", checked: false },
    { id: 5, label: "3월 14일 일요일 저녁 (7PM~10PM)", checked: false },
    { id: 6, label: "모두 가능합니다!", checked: false },
  ]);
  const [check, setCheck] = useState(false);

  const [checkedTimes, setCheckedTimes] = useState(new Set());

  const onToggle = (id) => {
    setTimeList(
      timeList.map((time) =>
        time.id === id ? { ...time, checked: !time.checked } : time
      )
    );
    checkTimeHandler(id, timeList);
    // console.log([...checkedTimes]);
  };

  const checkTimeHandler = (id, timeList) => {
    if (timeList[id].checked === false) {
      checkedTimes.add(timeList[id].label);
      setCheckedTimes(checkedTimes);
    } else if (
      timeList[id].checked === true &&
      checkedTimes.has(timeList[id].label)
    ) {
      checkedTimes.delete(timeList[id].label);
      setCheckedTimes(checkedTimes);
    }
  };

  const onToggleCheck = () => {
    setCheck(!check);
  };

  //처음 저장
  const submitSaveDev = () => {
    // let dateList = [];
    // for (let i = 0; i < [...checkedTimes].length; i++) {
    //   let date_item = {
    //     date: [...checkedTimes][i],
    //   };
    //   dateList.push(date_item);
    // }
    // console.log(dateList);
    try {
      const post = {
        user_id: posts.user_id,
        save_final: posts.save_final,
        motive: posts.motive,
        project_topic: posts.project_topic,
        application_field: posts.application_field,
        language: posts.language,
        confidence_lang: posts.confidence_lang,
        tool: [
          {
            tool_name: posts.tool[0].tool_name,
          },
          {
            tool_name: posts.tool[1].tool_name,
          },
          {
            tool_name: posts.tool[2].tool_name,
          },
        ],
        exp: inputs.first,
        link: inputs.second,
        orientation: check,
        interview: [
          { date: [...checkedTimes][0] || "-" },
          { date: [...checkedTimes][1] || "-" },
          { date: [...checkedTimes][2] || "-" },
        ],
      };
      console.log(post);

      //처음 저장 url: `${USER_SERVER}/api/recruitment/apply/save/dev`
      fetch(`${USER_SERVER}/api/recruitment/apply/save/dev`, {
        method: "post", // 통신방법
        headers: {
          "content-type": "application/json",
        }, // API응답 정보 담기
        body: JSON.stringify(post), //전달 내용
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          alert("저장이 완료되었습니다.");
        });
    } catch (error) {
      console.log(error);
      alert("저장에 실패하였습니다.");
    }
  };

  //수정 저장
  const submitUpdateDev = () => {
    // let dateList = [];
    // for (let i = 0; i < [...checkedTimes].length; i++) {
    //   let date_item = {
    //     date: [...checkedTimes][i],
    //   };
    //   dateList.push(date_item);
    // }
    // console.log(dateList);
    try {
      const post = {
        user_id: posts.user_id,
        dev_id: 4,
        save_final: posts.save_final,
        motive: posts.motive,
        project_topic: posts.project_topic,
        application_field: posts.application_field,
        language: posts.language,
        confidence_lang: posts.confidence_lang,
        tool: [
          {
            tool_name: posts.tool[0].tool_name,
          },
          {
            tool_name: posts.tool[1].tool_name,
          },
          {
            tool_name: posts.tool[2].tool_name,
          },
        ],
        exp: inputs.first,
        link: inputs.second,
        orientation: check,
        interview: [
          { date: [...checkedTimes][0] || "-" },
          { date: [...checkedTimes][1] || "-" },
          { date: [...checkedTimes][2] || "-" },
        ],
      };
      console.log(post);

      fetch(`${USER_SERVER}/api/recruitment/apply/update/dev`, {
        method: "post", // 통신방법
        headers: {
          "content-type": "application/json",
        }, // API응답 정보 담기
        body: JSON.stringify(post), //전달 내용
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          //alert("저장이 완료되었습니다.");
        });
    } catch (error) {
      console.log(error);
      //alert("저장에 실패하였습니다.");
    }
  };

  return (
    <>
      <BannerBlock>
        <Title>INTERN DEVELOPER</Title>
        <Subtitle>지원서 작성</Subtitle>
      </BannerBlock>
      <Main>
        <Question>
          1. 지금까지의 프로젝트 경험을 서술해주세요. (500자 내외)
        </Question>
        <InputBox name="first" value={first} onChange={onChange} />
        <Question>2. 깃허브 또는 기술블로그 링크를 적어주세요.</Question>
        <InputLine name="second" value={second} onChange={onChange} />
        <Question>
          3. 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을
          확인하셨습니까?
        </Question>
        <Checkbox
          onToggle={() => {
            onToggleCheck();
          }}
          label="네, 확인했습니다."
          checked={check}
        />
        <Question style={{ marginTop: "10rem", marginBottom: "5px" }}>
          4. 다음 중 면접이 '불가능한' 시간을 선택해주세요.
        </Question>
        <Text style={{ marginBottom: "3rem" }}>
          불가능한 시간을 모두 선택해주시고, 모두 가능하다면 '모두 가능합니다'를
          선택해주세요.{" "}
        </Text>
        <MeetingTime timeList={timeList} onToggle={onToggle} />
        <Bottom>
          <Text>3/3 페이지</Text>
          <div>
            <Button
              blue
              style={{ marginRight: 15 }}
              onClick={() => submitUpdateDev()}
            >
              저장
            </Button>
            {/* <Button filled onClick={() => { alert(`1번 : ${first} / 2번: ${second}`) }}>다음</Button> */}
            <Link to="/thankyou">
              <Button width="8" filled>
                제출하기
              </Button>
            </Link>
          </div>
        </Bottom>
      </Main>
    </>
  );
};

export default DeveloperApplyInternPage;
