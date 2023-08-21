import InboxIcon from "@mui/icons-material/MoveToInbox";

export const adminSidebarItems = [
  {
    heading: "Dashboard",
    items: [
      {
        name: "Home",
        icon: <InboxIcon />,
        to: "/admin",
      },
      {
        name: "Register User",
        icon: <InboxIcon />,
        to: "/admin/register-user",
      },
      {
        name: "Students",
        icon: <InboxIcon />,
        to: "/admin/students",
      },
      {
        name: "Teachers",
        icon: <InboxIcon />,
        to: "/admin/teachers",
      },
      {
        name: "Exams",
        icon: <InboxIcon />,
        to: "/admin/exams",
      },
      {
        name: "Questionnaires",
        icon: <InboxIcon />,
        to: "/admin/questionnaires",
      },
    ],
  },
];
