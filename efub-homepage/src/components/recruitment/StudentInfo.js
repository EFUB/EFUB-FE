import React from 'react';
import styled from 'styled-components';
import InputLine from '../common/InputLine';

const Text = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
`;

const StudentInfo = ({ onChange, data }) => {
  return (
    <>
      <InputLine
        name="name"
        value={data.name}
        label="이름"
        placeholder="지원자 이름"
        onChange={onChange}
      />
      <InputLine
        name="studentId"
        value={data.studentId}
        label="학번"
        placeholder="ex. 1886123"
        onChange={onChange}
      />
      <InputLine
        name="department"
        value={data.department}
        label="단대 및 학과"
        placeholder="ex.엘텍공과대학 소프트웨어학부 컴퓨터공학과"
        onChange={onChange}
      />
      <InputLine
        name="phoneNo"
        value={data.phoneNo}
        label="전화번호"
        placeholder="'-' 없이 입력"
        onChange={onChange}
      />
      <InputLine
        name="password"
        type="password"
        value={data.password}
        label="비밀번호 설정"
        placeholder="4자리 숫자"
        onChange={onChange}
      />
      <Text style={{ marginTop: '2rem' }}>
        인적사항은 추후 면접 일시와 합격 안내 시 이용됩니다.
      </Text>
      <Text>
        여러분의 소중한 개인정보는 이펍 모집 일정이 끝난 직후 바로 폐기됩니다.
      </Text>
    </>
  );
};

export default StudentInfo;
