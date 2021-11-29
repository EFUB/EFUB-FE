import axios from 'axios'

import { USER_SERVER } from '../config'

import {
    USER,
    CONTACT
  } from './type'

  export const user = () => {
    const request = axios
      .get(`${USER_SERVER}/recruitment/apply/user`)
      .then(response => response.data)
    return {
      type: USER,
      payload: request,
    }
}

export const contact = (contact_id) => {
    const request = axios
      .post(`${USER_SERVER}/contact?contact_id=${contact_id}`)
      .then(response => response.data)
    return {
      type: CONTACT,
      payload: request,
    }
}
