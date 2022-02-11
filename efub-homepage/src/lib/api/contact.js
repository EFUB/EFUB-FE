import client from './client';
import swal from 'sweetalert2';
import palette from '../styles/palette';
import { SwalError } from '../../components/common/SwalStyle';

export const sendEmail = async (body) => {
  try {
    const res = await client.post('contact', body);
    console.log(res)
    if (res.data === 200) {
      swal.fire({
        title: '메일을 성공적으로 보냈습니다!',
        text: '확인 후 입력하신 주소로 빠르게 답변드리겠습니다 : )',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        background: palette.black,
        color: palette.white,
        backdrop: palette.backdrop,
      });
    }
  } catch (e) {
    swal.fire(SwalError);
  }
};
