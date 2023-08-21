import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/adminPages/Dashboard";
import RegisterUser from "./pages/adminPages/RegisterUser";
import StudentList from "./pages/adminPages/StudentList";
import TeacherList from "./pages/adminPages/TeacherList";
import ExamList from "./pages/adminPages/ExamList";
import QuestionnaireList from "./pages/adminPages/QuestionnaireList";
import UserDashboard from "./pages/userPages/Dashboard";
import SideNavLayout from "./components/SideNavLayout/SideNavLayout";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { CustomizableProvider } from "./context/useCustomizable";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomizableProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin">
              <Route
                path=""
                element={
                  <SideNavLayout>
                    <AdminDashboard />
                  </SideNavLayout>
                }
              />
              <Route
                path="register-user"
                element={
                  <SideNavLayout>
                    <RegisterUser />
                  </SideNavLayout>
                }
              />
              <Route
                path="students"
                element={
                  <SideNavLayout>
                    <StudentList />
                  </SideNavLayout>
                }
              />
              <Route
                path="teachers"
                element={
                  <SideNavLayout>
                    <TeacherList />
                  </SideNavLayout>
                }
              />
              <Route
                path="exams"
                element={
                  <SideNavLayout>
                    <ExamList />
                  </SideNavLayout>
                }
              />
              <Route
                path="questionnaires"
                element={
                  <SideNavLayout>
                    <QuestionnaireList />
                  </SideNavLayout>
                }
              />
            </Route>
            <Route path="/u">
              <Route path="" element={<UserDashboard />} />
              <Route
                path="create-questionnaire"
                element={<>Questionnaires</>}
              />
              <Route path="questionnaires" element={<>Questionnaires</>} />
              <Route path="solutions" element={<>Questionnaires</>} />
            </Route>
            <Route path="*" element={<>LMFAO INVALIUD ROUTE</>} />
          </Routes>
        </Router>
      </CustomizableProvider>
    </ThemeProvider>
  );
}

export default App;
