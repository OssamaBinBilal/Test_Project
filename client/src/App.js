import AdminLogin from "./pages/adminPages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/adminPages/Dashboard";
import RegisterUser from "./pages/adminPages/RegisterUser";
import StudentList from "./pages/adminPages/StudentList";
import TeacherList from "./pages/adminPages/TeacherList";
import ExamList from "./pages/adminPages/ExamList";
import QuestionnaireList from "./pages/adminPages/QuestionnaireList";
import TeacherDashboard from "./pages/teacherPages/Dashboard";
import SideNavLayout from "./components/SideNavLayout/SideNavLayout";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { CustomizableProvider } from "./context/useCustomizable";
import { adminSidebarItems } from "./components/SideNavLayout/adminSidebarLinks";
import { teacherSidebarItems } from "./components/SideNavLayout/teacherSidebarLinks";
import CreateExam from "./pages/teacherPages/CreateExam";
import { studentSidebarItems } from "./components/SideNavLayout/studentSidebarLinks";
import StudentDashboard from "./pages/studentPages/Dashboard";
import StudentExams from "./pages/studentPages/Exams";
import AttemptExam from "./pages/studentPages/AttemptExam";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomizableProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/admin">
                <Route path="login" element={<AdminLogin />} />
                <Route
                  path=""
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <AdminDashboard />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="register-user"
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <RegisterUser />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="students"
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <StudentList />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="teachers"
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <TeacherList />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="exams"
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <ExamList />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="questionnaires"
                  element={
                    <SideNavLayout sidebarItems={adminSidebarItems}>
                      <QuestionnaireList />
                    </SideNavLayout>
                  }
                />
              </Route>
              <Route path="/teacher">
                <Route
                  path=""
                  element={
                    <SideNavLayout sidebarItems={teacherSidebarItems}>
                      <TeacherDashboard />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="create-exam"
                  element={
                    <SideNavLayout sidebarItems={teacherSidebarItems}>
                      <CreateExam />
                    </SideNavLayout>
                  }
                />
                <Route path="questionnaires" element={<>Questionnaires</>} />
                <Route path="solutions" element={<>Questionnaires</>} />
              </Route>
              <Route path="/student">
                <Route
                  path=""
                  element={
                    <SideNavLayout sidebarItems={studentSidebarItems}>
                      <StudentDashboard />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="exams"
                  element={
                    <SideNavLayout sidebarItems={studentSidebarItems}>
                      <StudentExams />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="attempt/exam/:id"
                  element={
                    <SideNavLayout sidebarItems={studentSidebarItems}>
                      <AttemptExam />
                    </SideNavLayout>
                  }
                />
              </Route>
              <Route path="*" element={<>LMFAO INVALIUD ROUTE</>} />
            </Routes>
          </Router>
        </UserProvider>
      </CustomizableProvider>
    </ThemeProvider>
  );
}

export default App;
