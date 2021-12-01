import DesignerApplyFormPage from "../../pages/Recruitment/DesignerApplyFormPage";
import DeveloperApplyFormPage from "../../pages/Recruitment/DeveloperApplyFormPage";

function SaveUserID(props) {
  const { user_id } = props;

  return (
    <div>
      <DesignerApplyFormPage user_id={user_id} />
      <DeveloperApplyFormPage user_id={user_id} />
    </div>
  );
}

export default SaveUserID;
