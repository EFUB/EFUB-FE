import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/Admin/AdminRoutes";
import HomepageRoutes from "./pages/HomepageRoutes";

const App = () => {
  return (
    <>
        <Routes>
          <Route element={<HomepageRoutes />} path="/*" />
          <Route element={<AdminRoutes/>} path="/admin/*" />
        </Routes>
    </>
  );
};

// function Content() {
//   return (
//     <AppContext.Consumer>
//       {isMember => (
//         <DeveloperApplyMainPage isMember={isMember}  />
//       )}
//     </AppContext.Consumer>
//   );
// }

export default App;
