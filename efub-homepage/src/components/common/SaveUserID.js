import DesignerApplyFormPage from "../../pages/Recruitment/DesignerApplyFormPage";
import DeveloperApplyFormPage from "../../pages/Recruitment/DeveloperApplyFormPage";

function SaveUserID(props) {
  const { userId } = props;
  
  return (
    <div>
      <DesignerApplyFormPage userId={userId}/>
      <DeveloperApplyFormPage userId={userId}/>
    </div>
  );
}

export default SaveUserID;