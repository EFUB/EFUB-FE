import DesignerApplyFormPage from "../../pages/Recruitment/DeveloperApplyFormPage";

function SaveUserID(props) {
  const { user_id, save_final } = props;
  
  return (
    <div>
      <DesignerApplyFormPage user_id={user_id}/>
    </div>
  );
}

export default SaveUserID;