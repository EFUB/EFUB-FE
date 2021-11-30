import axios from 'axios'

import { USER_SERVER } from '../config'

import {
    USER_INFO,
    CONTACT
  } from './type'

  //getIsMember 스터디 가입여부 확인
  export const userInfo = (name, student_id, department, phone_no, password, position) => {
    const request = axios
      .get(`${USER_SERVER}/api/recruitment/apply/user/${name}/${student_id}/${department}/${phone_no}/${password}/${position}`)
      .then(response => response.data)
    return {
      type: USER_INFO,
      payload: request,
    }
}


// contact 페이지에서 이메일 보내기
export const contact = (Writer_email, Content) => {
    const request = axios
      .post(`${USER_SERVER}/api/contact`,
      {
        writer_email:  Writer_email,
        content : Content
      })
      .then(response => response.data)
    return {
      type: CONTACT,
      payload: request,
    }
}
