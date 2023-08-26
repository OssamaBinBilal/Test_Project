import InboxIcon from "@mui/icons-material/MoveToInbox";

export const studentSidebarItems = [
  {
    heading: "Dashboard",
    items: [
      {
        name: "Home",
        icon: <InboxIcon />,
        to: "/student",
      },
      {
        name: "Take Exam",
        icon: <InboxIcon />,
        to: "/student/exams",
      },
    ],
  },
];
