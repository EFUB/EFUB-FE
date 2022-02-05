import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import Button from '../../components/common/Button';
import StudentInfo from '../../components/recruitment/StudentInfo';
import DeveloperForm from '../../components/recruitment/DeveloperForm';
import palette from '../../lib/styles/palette';

import {
  userForm,
  developer,
  time,
  applyForm,
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
  const [check, setCheck] = useState(true);
  const [user, setUser] = useState(userForm);
  const _handleUser = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [stackList, setStackList] = useState(developer);
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

  const [apply, setApply] = useState(applyForm);
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

  const onCheck = async (data) => {
    window.scrollTo(0, 0);
    setCheck(!check);
  };

  const onSubmit = async (user, stackList, timeList, apply) => {
    let tools = [];
    stackList.map((s) => s.checked && tools.push(s.label));
    let interviews = [];
    timeList.map((t) => t.checked && interviews.push(t.label));
    let newApply = apply;
    switch (apply.applicationField) {
      case 1:
        apply.applicationField = '인턴개발자 - 프론트엔드';
        break;
      case 2:
        apply.applicationField = '리드개발자 - 프론트엔드';
        break;
      case 3:
        apply.applicationField = '인턴개발자 - 백엔드';
        break;
      case 4:
        apply.applicationField = '리드개발자 - 백엔드';
        break;
      case 5:
        apply.applicationField = '인턴개발자 - 프론트 & 백';
        break;
      default:
        break;
    }
    const form = {
      user: user,
      tools: tools,
      interviews: interviews,
      apply: newApply,
    };
    console.log(form);

    swal
      .fire({
        text: '제출이 완료된 지원서는 삭제 및 수정이 불가능합니다.',
        icon: 'warning',
        iconColor: palette.green,
        showCancelButton: true,
        confirmButtonColor: palette.green,
        cancelButtonColor: '#a8a8a8',
        confirmButtonText: '제출',
        cancelButtonText: '닫기',
        background: palette.black,
        color: palette.white,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = 200;
            if (res === 200) navigate('/recruitment/thankyou');
          } catch (e) {
            swal.fire({
              width: 400,
              text: '오류가 발생했습니다.',
              icon: 'error',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        }
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
          <StudentInfo data={user} onChange={_handleUser} />
        ) : (
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
        )}
        <Bottom>
          {check ? (
            <>
              <Text>1/2 페이지</Text>
              <Button filled onClick={() => onCheck(user)}>
                다음
              </Button>
            </>
          ) : (
            <>
              <Text>2/2 페이지</Text>
              <ButtonBox>
                <Button
                  onClick={() => {
                    setCheck(!check);
                    window.scrollTo(0, 0);
                  }}
                >
                  이전
                </Button>
                <Button
                  filled
                  onClick={() => onSubmit(user, stackList, timeList, apply)}
                >
                  제출
                </Button>
              </ButtonBox>
            </>
          )}
        </Bottom>
      </Main>
    </>
  );
};

export default RecruitmentDeveloperPage;
