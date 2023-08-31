import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const useSolutionColumns = (role) => {
  const _columns = [
    { field: "id", headerName: "ID", width: 150, sortable: false },
    {
      field: "submitter_id",
      headerName: "Student ID",
      width: 150,
      sortable: false,
    },
    {
      field: "expandButton",
      headerName: "Actions",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            variant="contained"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={
                role === "admin"
                  ? `/admin/solution/${params.row.id}`
                  : `/teacher/solution/${params.row.id}`
              }
            >
              Expand
            </Link>
          </Button>
        </>
      ),
    },
  ];

  return _columns;
};

export default useSolutionColumns;
