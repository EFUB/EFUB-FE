import DesignerApplyFormPage from "../../pages/Recruitment/DesignerApplyFormPage";
import DeveloperApplyFormPage from "../../pages/Recruitment/DeveloperApplyFormPage";

function SaveUserID(props) {
  let { userId } = props;

  return (
    <div>
      <DesignerApplyFormPage userId={userId} />
      <DeveloperApplyFormPage userId={userId} />
    </div>
  );
}

export default SaveUserID;
