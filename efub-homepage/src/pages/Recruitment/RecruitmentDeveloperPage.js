import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import StudentInfo from '../../components/recruitment/StudentInfo';
import DeveloperForm from '../../components/recruitment/DeveloperForm';
import { checkDeveloper, submitDeveloper } from '../../lib/api/recruitment';

import {
  userForm,
  developerStackList,
  time,
  developerApplyForm,
} from '../../assets/recruitment/recuitmentForm';
import {
  BannerBlock,
  Title,
  Subtitle,
  Main,
  Bottom,
  ButtonBox,
  Text,
} from '../../lib/styles/styledRecruitment';

const RecruitmentDeveloperPage = () => {
  const navigate = useNavigate();

  //지원 불가능이면 false - 화면 안 넘어감
  //지원 가능이면 true - 화면 넘어감
  const [check, setCheck] = useState(false);

  const [user, setUser] = useState(userForm);
  const _handleUser = (e) => {
    let { value, name } = e.target;
    if (!(name === 'name' || name === 'department'))
      value = value.replace(/[^0-9]/g, '');
    if (name === 'password') value = value.slice(0, 4);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [stackList, setStackList] = useState(developerStackList);
  const _onToggleStack = (id) => {
    setStackList(
      stackList.map((stack) =>
        stack.id === id ? { ...stack, checked: !stack.checked } : stack,
      ),
    );
  };

  const [timeList, setTimeList] = useState(time);
  const _onToggleTime = (id) => {
    setTimeList(
      timeList.map((time) =>
        time.id === id ? { ...time, checked: !time.checked } : time,
      ),
    );
  };

  const [apply, setApply] = useState(developerApplyForm);
  const _handleApply = (e) => {
    const { value, name } = e.target;
    setApply({
      ...apply,
      [name]: value,
    });
  };
  const _onClickPart = (id) => {
    setApply({
      ...apply,
      applicationField: id,
    });
  };
  const _onClickScore = (id) => {
    setApply({
      ...apply,
      confidenceLang: id,
    });
  };
  const _onToggleCheck = () => {
    setApply({
      ...apply,
      check: !apply.check,
    });
  };

  const _handleCheck = async () => {
    const res = await checkDeveloper(user);
    if (res === true) {
      setCheck(true);
    }
  };

  const onNavigate = () => {
    navigate('thankyou');
  };
  const _handleSubmit = () => {
    submitDeveloper({
      user,
      stackList,
      timeList,
      apply,
      onNavigate,
    });
  };

  return (
    <>
      <BannerBlock>
        <Title>DEVELOPER</Title>
        <Subtitle>지원서 작성</Subtitle>
      </BannerBlock>
      <Main>
        {check ? (
          <DeveloperForm
            onChange={_handleApply}
            onClickPart={_onClickPart}
            onClickScore={_onClickScore}
            onToggleStack={_onToggleStack}
            onToggleCheck={_onToggleCheck}
            onToggleTime={_onToggleTime}
            apply={apply}
            stackList={stackList}
            timeList={timeList}
          />
        ) : (
          <StudentInfo data={user} onChange={_handleUser} />
        )}
        <Bottom>
          {check ? (
            <>
              <Text>2/2 페이지</Text>
              <ButtonBox>
                <Button
                  onClick={() => {
                    setCheck(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  이전
                </Button>
                <Button
                  filled
                  onClick={() =>
                    _handleSubmit(user, stackList, timeList, apply)
                  }
                >
                  제출
                </Button>
              </ButtonBox>
            </>
          ) : (
            <>
              <Text>1/2 페이지</Text>
              <Button filled onClick={() => _handleCheck()}>
                다음
              </Button>
            </>
          )}
        </Bottom>
      </Main>
    </>
  );
};

export default RecruitmentDeveloperPage;
