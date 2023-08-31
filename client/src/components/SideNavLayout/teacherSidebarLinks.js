import InboxIcon from "@mui/icons-material/MoveToInbox";

export const teacherSidebarItems = [
  {
    heading: "Dashboard",
    items: [
      {
        name: "Home",
        icon: <InboxIcon />,
        to: "/teacher",
      },
      {
        name: "Create Exam",
        icon: <InboxIcon />,
        to: "/teacher/create-exam",
      },
      {
        name: "Exams",
        icon: <InboxIcon />,
        to: "/teacher/exams",
      },
      {
        name: "logout",
        icon: <InboxIcon />,
        to: "/logout",
      },
    ],
  },
];
