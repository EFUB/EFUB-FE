import React from 'react';
import InputBox from '../../components/common/InputBox';
import InputLine from '../../components/common/InputLine';
import Stack from './Stack';
import DeveloperPart from '../../components/recruitment/DeveloperPart';
import Confident from '../../components/common/Confident';
import Checkbox from '../common/CheckBox';
import MeetingTime from './MeetingTime';
import {
  BannerBlock,
  Title,
  Line,
  Wrapper,
  Question,
  Text,
} from '../../lib/styles/styledRecruitment';

const DeveloperForm = ({
  onChange,
  onClickPart,
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
      <Question>
        2. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히 설명해주세요.
        (100자 내외)
      </Question>
      <InputBox
        name="projectTopic"
        value={apply.projectTopic}
        onChange={onChange}
      />
      <Question>3. 지원 분야를 선택해주세요.</Question>
      <DeveloperPart part={apply.applicationField} onClickPart={onClickPart} />
      <Text style={{ marginBottom: 25 }}>
        3번 문항의 답변에 따라 아래 지원서 폼이 달라지게 되니 신중히 체크해
        주세요!
      </Text>
      <Question>4. 자신 있는 프로그래밍 언어를 적어주세요.</Question>
      <InputLine
        name="language"
        value={apply.language}
        placeholder="ex. 파이썬"
        onChange={onChange}
      />
      <Question>
        4-1. 위에서 답한 언어에 대한 숙련도를 5점 만점으로 평가해주세요.
      </Question>
      <Wrapper>
        <Confident score={apply.confidenceLang} onClickScore={onClickScore} />
      </Wrapper>
      <Question>
        5. 사용할 수 있는 언어 및 프레임워크를 모두 선택해주세요.
      </Question>
      <Stack stackList={stackList} onToggle={onToggleStack} />
      {apply.applicationField === 2 || apply.applicationField === 4 ? (
        <>
          <Line />
          <BannerBlock>
            <Title style={{ marginBottom: '0rem' }}>LEAD</Title>
          </BannerBlock>
          <Question>
            1. 지금까지의 프로젝트 또는 협업 경험을 서술해주세요. (500자 내외)
          </Question>
          <InputBox
            name="expProject"
            value={apply.expProject}
            onChange={onChange}
          />
          <Question>
            2. 다른 직군과의 협업 중 갈등을 어떻게 해결하셨는지 적어주세요.
            (300자 내외)
          </Question>
          <InputBox
            name="expSolve"
            value={apply.expSolve}
            onChange={onChange}
          />
          <Question>
            3. 세미나 커리큘럼 중 가장 자신 있거나 진행하고 싶은 주제를
            적어주세요.
          </Question>
          <InputLine
            name="seminarTopic"
            value={apply.seminarTopic}
            onChange={onChange}
            placeholder="ex. 4주차 MySQL"
          />
          <Question>
            4. 깃허브 또는 기술블로그 링크를 적어주세요. (여러 개 제출 가능)
          </Question>
          <InputLine
            name="link"
            value={apply.link}
            onChange={onChange}
            placeholder="ex. https://github.com, https://www.tistory.com/"
          />
        </>
      ) : (
        <>
          <Line />
          <BannerBlock>
            <Title style={{ marginBottom: '0rem' }}>INTERN</Title>
          </BannerBlock>
          <Question>
            1. 지금까지의 프로젝트 또는 협업 경험을 서술해주세요. (500자 내외)
          </Question>
          <InputBox
            name="expProject"
            value={apply.expProject}
            onChange={onChange}
          />
          <Question>
            2. 수업 외에 스스로 개발 관련 공부를 해본 경험이 있다면 적어주세요.
            (500자 내외)
          </Question>
          <InputBox
            name="expStudy"
            value={apply.expStudy}
            onChange={onChange}
          />
          <Question>
            3. 깃허브 또는 기술블로그가 있다면 링크를 적어주세요. (여러 개 제출
            가능)
          </Question>
          <InputLine
            name="link"
            value={apply.link}
            onChange={onChange}
            placeholder="ex. https://github.com, https://www.tistory.com/"
          />
        </>
      )}

      <Question>
        * 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을
        확인하셨습니까?
      </Question>
      <Checkbox
        onToggle={() => {
          onToggleCheck();
        }}
        label="네, 확인했습니다."
        checked={apply.orientation}
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

export default DeveloperForm;
