import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import TimerIcon from "@mui/icons-material/Timer";
import { Button, Typography } from "@mui/material";
import { updateExamStatus } from "../apis/admin/admin";
import { Link } from "react-router-dom";

const useExamColumns = (role, retrieveExams = () => {}) => {
  const getColorFromStatus = (status) => {
    if (status === "approved") return "success";
    else if (status === "rejected") return "error";
    else if (status === "pending") return "info";
  };

  const handleStatusUpdate = (id, status) => {
    updateExamStatus(id, status)
      .then((response) => {
        console.log(response);
        retrieveExams();
      })
      .catch((e) => console.log(e));
  };

  const staticColumns = [
    {
      field: "creator_id",
      headerName: "Teacher / Creator",
      width: 150,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Typography
          variant="span"
          sx={{ fontWeight: "bold" }}
          color={getColorFromStatus(params.row.status)}
        >
          {params.row.status}
        </Typography>
      ),
    },
    {
      field: "subject",
      headerName: "Course",
      width: 150,
      sortable: false,
    },
    {
      field: "start_time",
      headerName: "Start time",
      width: 210,
      sortable: false,
    },
    {
      field: "end_time",
      headerName: "Expire time",
      width: 210,
      sortable: false,
    },
  ];

  const updateStatusColumn = {
    field: "updateStatus",
    headerName: "Update Status",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <>
        <CheckCircleIcon
          color="success"
          onClick={() => handleStatusUpdate(params.row.id, "approved")}
        />
        <CancelIcon
          sx={{ mx: 1 }}
          color="error"
          onClick={() => handleStatusUpdate(params.row.id, "rejected")}
        />
        <TimerIcon
          color="info"
          onClick={() => handleStatusUpdate(params.row.id, "pending")}
        />
      </>
    ),
  };

  const attemptExamColumn = {
    field: "attemptExam",
    headerName: "Attempt Exam",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <>
        <Button
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          variant="contained"
          onClick={() => console.log()}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/student/attempt/exam/${params.row.id}`}
          >
            Attempt
          </Link>
        </Button>
      </>
    ),
  };

  const viewSolutionsColumn = {
    field: "viewSolutions",
    headerName: "View Solutions",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <>
        <Button
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          variant="contained"
          onClick={() => console.log()}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={
              role === "admin"
                ? `/admin/solutions/${params.row.id}`
                : `/teacher/solutions/${params.row.id}`
            }
          >
            View Solutions
          </Link>
        </Button>
      </>
    ),
  };

  if (role === "admin")
    return [...staticColumns, updateStatusColumn, viewSolutionsColumn];
  else if (role === "student") return [...staticColumns, attemptExamColumn];
  else if (role === "teacher") return [...staticColumns, viewSolutionsColumn];
};

export default useExamColumns;
