import client from './client';
import swal from 'sweetalert2';
import palette from '../styles/palette';
import { SwalError, SwalEmpty } from '../../components/common/SwalStyle';

const check = async ({ body, part }) => {
  if (
    body.name &&
    body.studentId &&
    body.department &&
    body.phoneNo &&
    body.password
  ) {
    try {
      const res = await client.post(`recruitment/apply/${part}`, body);
      if (res.data === 200) {
        window.scrollTo(0, 0);
        return true;
      }
    } catch (e) {
      swal.fire({
        title: '지원 완료',
        text: '지원서가 이미 제출되었습니다!',
        icon: 'success',
        iconColor: palette.green,
        showConfirmButton: false,
        timer: 2000,
        background: palette.black,
        color: palette.white,
        backdrop: palette.backdrop,
      });
    }
  } else {
    swal.fire(SwalEmpty);
  }
};

export const checkDeveloper = async (body) => {
  return check({ body: body, part: 'develop' });
};

export const checkDesigner = async (body) => {
  return check({ body: body, part: 'design' });
};

const submit = ({ body, part, navigate }) => {
  try {
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
        backdrop: palette.backdrop,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          console.log('확인');
          try {
            const res = await client.post(`recruitment/submit/${part}`, body);
            if (res.data === 200) navigate();
            else return false;
          } catch (e) {
            swal.fire(SwalError);
          }
        }
      });
  } catch (e) {
    console.log(e);
  }
};

export const submitDeveloper = async ({
  user,
  stackList,
  timeList,
  apply,
  onNavigate,
}) => {
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
  if (
    apply.motive &&
    apply.projectTopic &&
    apply.language &&
    apply.expProject
  ) {
    if (
      apply.applicationField === '리드개발자 - 프론트엔드' ||
      apply.applicationField === '리드개발자 - 백엔드'
    ) {
      if (apply.expSolve && apply.seminarTopic && apply.link) {
        return submit({
          body: form,
          part: 'develop/lead',
          navigate: onNavigate,
        });
      } else {
        swal.fire(SwalEmpty);
      }
    } else {
      if (apply.expStudy) {
        const res = submit({
          body: form,
          part: 'develop/intern',
          navigate: onNavigate,
        });
        console.log(res);
      } else {
        swal.fire(SwalEmpty);
      }
    }
  } else {
    swal.fire(SwalEmpty);
  }
};

export const submitDesigner = async ({ user, stackList, timeList, apply }) => {
  let tools = [];
  stackList.map((s) => s.checked && tools.push(s.label));
  let interviews = [];
  timeList.map((t) => t.checked && interviews.push(t.label));
  const form = {
    user: user,
    tools: tools,
    interviews: interviews,
    apply: apply,
  };
  if (apply.motive && apply.activityPlan && apply.expSolve && apply.link) {
    return submit({ body: form, part: 'design' });
  } else {
    swal.fire(SwalEmpty);
  }
};

export const checkPass = async ({ body, step }) => {
  if (body.name && body.phoneNo && body.password) {
    try {
      const res = await client.post(`recruitment/pass/${step}`, body);
      if (res.result === '합격') return true;
      else if (res.result === '불합격') return false;
      else if (res.result === '잘못된 정보입니다.') {
        swal.fire({
          width: 400,
          background: palette.black,
          color: palette.white,
          text: '제출 내역이 존재하지 않습니다.',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          backdrop: palette.backdrop,
        });
      } else if (res.result === '비밀번호가 틀립니다.') {
        swal.fire({
          width: 400,
          background: palette.black,
          color: palette.white,
          text: '비밀번호를 다시 확인해 주세요.',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          backdrop: palette.backdrop,
        });
      } else swal.fire(SwalError);
    } catch (e) {
      swal.fire(SwalError);
    }
  } else {
    swal.fire(SwalEmpty);
  }
};
