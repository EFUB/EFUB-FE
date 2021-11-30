import axios from "axios";
import { USER_SERVER } from "../config";

import { DES_SAVE } from "./type";

//액션생성함수
// user_id,
// save_final,
//   motive,
//   confidence_des,
//   tool,
//   confidence_tool,
//   project_topic,
//   exp_dev,
//   exp_des,
//   link,
//   interview,
//   orientation
// ${user_id}/${save_final}/${motive}/${confidence_des}/${tool}/${confidence_tool}/${project_topic}/${exp_dev}/${exp_des}/${link}/${interview}/${orientation}
export const desSave = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/api/recruitment/apply/save/des/`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return {
    type: DES_SAVE,
    payload: request,
  };
};
