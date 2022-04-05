import palette from '../../lib/styles/palette';

export const SwalError = {
  width: 400,
  background: palette.black,
  color: palette.white,
  text: '에러가 발생했습니다.',
  icon: 'error',
  showConfirmButton: false,
  timer: 1500,
  backdrop: palette.backdrop,
};

export const SwalEmpty = {
  text: '입력하지 않은 내용이 있습니다.',
  icon: 'warning',
  iconColor: palette.green,
  showConfirmButton: false,
  timer: 1000,
  background: palette.black,
  color: palette.white,
  backdrop: palette.backdrop,
};
