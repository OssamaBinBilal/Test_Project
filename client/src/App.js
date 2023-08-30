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
import ProtectedAdminRoute from "./components/ProtectedAdminRoute/ProtectedAdminRoute";
import NonAdminLoginRoute from "./components/NonAdminLoginRoute/NonAdminLoginRoutes";
import TeacherLogin from "./pages/teacherPages/Login";
import ProtectedTeacherRoute from "./components/ProtectedTeacherRoute/ProtectedTeacherRoute";
import NonTeacherLoginRoute from "./components/NonTeacherLoginRoute/NonTeacherLoginRoute";
import StudentLogin from "./pages/studentPages/Login";
import ProtectedStudentRoute from "./components/ProtectedStudentRoute/ProtectedStudentRoute";
import NonStudentLoginRoute from "./components/NonStudentLoginRoute/NonStudentLoginRoute";
import ViewSolutions from "./pages/adminPages/ViewSolutions";
import AdminSolution from "./pages/adminPages/Solution";
import StudentSolution from "./pages/studentPages/Solution";
import TeacherSolutions from "./pages/teacherPages/Solutions";
import TeacherExamsList from "./pages/teacherPages/Exams";
import TeacherSolution from "./pages/teacherPages/Solution";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

//convert all components to arrow
//single file to index.js

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CustomizableProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin">
                <Route
                  path="login"
                  element={
                    <NonAdminLoginRoute>
                      <AdminLogin />
                    </NonAdminLoginRoute>
                  }
                />
                <Route
                  path=""
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <AdminDashboard />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="register-user"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <RegisterUser />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="students"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <StudentList />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="teachers"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <TeacherList />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="exams"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <ExamList />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="solutions/:examId"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <ViewSolutions />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="solution/:solutionId"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <AdminSolution />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
                <Route
                  path="questionnaires"
                  element={
                    <ProtectedAdminRoute>
                      <SideNavLayout sidebarItems={adminSidebarItems}>
                        <QuestionnaireList />
                      </SideNavLayout>
                    </ProtectedAdminRoute>
                  }
                />
              </Route>
              <Route path="/teacher">
                <Route
                  path="login"
                  element={
                    <NonTeacherLoginRoute>
                      <TeacherLogin />
                    </NonTeacherLoginRoute>
                  }
                />
                <Route
                  path="exams"
                  element={
                    <ProtectedTeacherRoute>
                      <SideNavLayout sidebarItems={teacherSidebarItems}>
                        <TeacherExamsList />
                      </SideNavLayout>
                    </ProtectedTeacherRoute>
                  }
                />
                <Route
                  path=""
                  element={
                    <ProtectedTeacherRoute>
                      <SideNavLayout sidebarItems={teacherSidebarItems}>
                        <TeacherDashboard />
                      </SideNavLayout>
                    </ProtectedTeacherRoute>
                  }
                />
                <Route
                  path="solution/:solutionId"
                  element={
                    <ProtectedTeacherRoute>
                      <SideNavLayout sidebarItems={teacherSidebarItems}>
                        <TeacherSolution />
                      </SideNavLayout>
                    </ProtectedTeacherRoute>
                  }
                />
                <Route
                  path="create-exam"
                  element={
                    <ProtectedTeacherRoute>
                      <SideNavLayout sidebarItems={teacherSidebarItems}>
                        <CreateExam />
                      </SideNavLayout>
                    </ProtectedTeacherRoute>
                  }
                />
                <Route
                  path="solutions/:examId"
                  element={
                    <ProtectedTeacherRoute>
                      <SideNavLayout sidebarItems={teacherSidebarItems}>
                        <TeacherSolutions />
                      </SideNavLayout>
                    </ProtectedTeacherRoute>
                  }
                />
                <Route path="questionnaires" element={<>Questionnaires</>} />
                <Route path="solutions" element={<>Questionnaires</>} />
              </Route>
              <Route path="/student">
                <Route
                  path="login"
                  element={
                    <NonStudentLoginRoute>
                      <StudentLogin />
                    </NonStudentLoginRoute>
                  }
                />
                <Route
                  path=""
                  element={
                    <ProtectedStudentRoute>
                      <SideNavLayout sidebarItems={studentSidebarItems}>
                        <StudentDashboard />
                      </SideNavLayout>
                    </ProtectedStudentRoute>
                  }
                />
                <Route
                  path="solution/:solutionId"
                  element={
                    <ProtectedStudentRoute>
                      <SideNavLayout sidebarItems={studentSidebarItems}>
                        <StudentSolution />
                      </SideNavLayout>
                    </ProtectedStudentRoute>
                  }
                />
                <Route
                  path="exams"
                  element={
                    <ProtectedStudentRoute>
                      <SideNavLayout sidebarItems={studentSidebarItems}>
                        <StudentExams />
                      </SideNavLayout>
                    </ProtectedStudentRoute>
                  }
                />
                <Route
                  path="attempt/exam/:id"
                  element={
                    <ProtectedStudentRoute>
                      <SideNavLayout sidebarItems={studentSidebarItems}>
                        <AttemptExam />
                      </SideNavLayout>
                    </ProtectedStudentRoute>
                  }
                />
              </Route>
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<>This is an invalid route</>} />
            </Routes>
          </UserProvider>
        </CustomizableProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
