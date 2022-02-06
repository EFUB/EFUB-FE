import React from 'react';
import InputBox from '../../components/common/InputBox';
import InputLine from '../../components/common/InputLine';
import Stack from './Stack';
import Confident from '../../components/common/Confident';
import Checkbox from '../common/CheckBox';
import MeetingTime from './MeetingTime';
import { Wrapper, Question, Text } from '../../lib/styles/styledRecruitment';

const DesignerForm = ({
  onChange,
  onClickScore,
  onToggleStack,
  onToggleCheck,
  onToggleTime,
  apply,
  stackList,
  timeList,
}) => {
  return (
    <>
      <Question>1. EFUB에 지원하게 된 동기를 적어주세요. (300자 내외)</Question>
      <InputBox name="motive" value={apply.motive} onChange={onChange} />
      <Question>2. 사용할 수 있는 디자인 툴을 모두 선택해주세요.</Question>
      <Stack stackList={stackList} onToggle={onToggleStack} />
      <Question>
        2-1. 선택하신 툴들에 대한 숙련도를 5점 만점으로 평가해주세요.
      </Question>
      <Wrapper>
        <Confident score={apply.confidenceTool} onClickScore={onClickScore} />
      </Wrapper>
      <Question>
        3. 동아리에 들어온다면 어떤 방식으로 활동하실지 적어주세요. (300자 내외)
      </Question>
      <InputBox
        name="activityPlan"
        value={apply.activityPlan}
        onChange={onChange}
      />
      <Question>
        4. 다른 팀원 혹은 직군과의 의견 충돌이 생겼을 때 어떻게 해결하셨는지
        경험을 바탕으로 작성해 주세요. (300자 내외)
      </Question>
      <InputBox name="expSolve" value={apply.expSolve} onChange={onChange} />
      <Question>5. 포트폴리오 링크를 제출해주세요.</Question>
      <InputLine
        name="link"
        value={apply.link}
        placeholder="ex. http://notion.so/efub-portfolio"
        onChange={onChange}
      />
      <Question>
        * 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을
        확인하셨습니까?
      </Question>
      <Checkbox
        onToggle={() => {
          onToggleCheck();
        }}
        label="네, 확인했습니다."
        checked={apply.check}
      />
      <Question style={{ marginTop: '10rem', marginBottom: '5px' }}>
        * 다음 중 면접이 '불가능한' 시간을 선택해주세요.
      </Question>
      <Text style={{ marginBottom: '3rem' }}>
        불가능한 시간을 모두 선택해주시고, 모두 가능하다면 '모두 가능합니다'를
        선택해주세요.
      </Text>
      <MeetingTime timeList={timeList} onToggle={onToggleTime} />
    </>
  );
};

export default DesignerForm;
